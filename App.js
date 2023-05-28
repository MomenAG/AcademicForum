import React, { useState, useRef } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-datepicker";
import ImagePicker from "react-native-image-picker";
import { CheckBox } from 'react-native-elements';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  Check,
} from "react-native";

// Home Container Component
const HomeContainer = ({ handleGoBack }) => {
  return (
    <ScrollView
      style={styles.homeContainer}
      contentContainerStyle={styles.homeContentContainer}
    >
      <Image source={require("./assets/FinalLogo.png")} style={styles.logo} />
    </ScrollView>
  );
};

// Register Page Component
const RegisterPage = ({ handleGoBack }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];
  const [mail, setMail] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [major, setMajor] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const selectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: "Select Picture",
        mediaType: "photo",
        maxWidth: 500,
        maxHeight: 500,
      },
      (response) => {
        if (!response.didCancel && !response.error) {
          setSelectedImage(response.uri);
        }
      }
    );
  };

  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSend = () => {
    // Handle send functionality here
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("date:", selectedDate);
    console.log("Mail:", mail);
    console.log("Selected City:", selectedCity);
    console.log("Selected Degree:", selectedDegree);
    console.log("major:", major);
    console.log("company:", companyName);
    console.log("position:", position);
    console.log("Selected Gender:", selectedGender);
    console.log("phoneNumber:", phoneNumber);
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            source={require("./assets/FinalLogo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.pageContentContainer}>
        <Text style={styles.label}> First Name </Text>
        <TextInput
          // placeholder="Enter Your Name"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.label}> Last Name</Text>
        <TextInput
          // placeholder="Enter Your Name"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
        <View style={styles.container}>
          <DatePicker
            style={styles.datePicker}
            date={selectedDate}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2100-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display: "none",
              },
              dateInput: {
                borderWidth: 0,
              },
            }}
            onDateChange={handleDateChange}
          />
        </View>
        <Text style={styles.label}> Mail</Text>
        <TextInput
          // placeholder="Enter Your Name"
          style={styles.input}
          value={mail}
          onChangeText={setMail}
        />
        <Text style={styles.label}>Select City</Text>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>{selectedCity || "Select"}</Text>
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.option}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <Text style={styles.label}>Select Degree</Text>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>
              {selectedDegree || "Select"}
            </Text>
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.option}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <Text style={styles.label}> Major </Text>
        <TextInput
          // placeholder="Enter Your Name"
          style={styles.input}
          value={mail}
          onChangeText={setMajor}
        />
        <Text style={styles.label}> Company Name </Text>
        <TextInput
          // placeholder="Enter Your Name"
          style={styles.input}
          value={companyName}
          onChangeText={setCompanyName}
        />
        <Text style={styles.label}> Position </Text>
        <TextInput
          // placeholder="Enter Your Name"
          style={styles.input}
          value={position}
          onChangeText={setPosition}
        />
        <Text style={styles.label}>Select Gender</Text>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>
              {selectedGender || "Select"}
            </Text>
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.option}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <Text style={styles.label}> Phone Number </Text>
        <TextInput
          // placeholder="Enter Your Name"
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <View>
          <Button title="Upload Picture" onPress={selectImage} />
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <CheckBox
        title='I confirm that the information I provided is reliable and accurate, and I also agree to bear the responsibility for publishing unreliable information, as well as I agree to publish the image of my personal file, which does not have any copying rights, publicly on the site and on the application the Arab Academic Forum database.'
        checked={checked}
        onPress={toggleCheckbox}
      />        
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Search Page Component
const SearchPage = ({ handleGoBack }) => {
  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            source={require("./assets/FinalLogo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.pageContentContainer}>
        <Text style={styles.pageText}>This is the Search page.</Text>
      </View>
    </ScrollView>
  );
};

// Podcast Page Component
const PodcastPage = ({ handleGoBack }) => {
  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            source={require("./assets/FinalLogo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.pageContentContainer}>
        <Text style={styles.pageText}>This is the Podcast page.</Text>
      </View>
    </ScrollView>
  );
};

// Contact Page Component
const ContactPage = ({ handleGoBack }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [selectedSubject, setSelectedOption] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];
  const [message, setMessage] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleSend = () => {
    // Handle send functionality here
    console.log("Name:", name);
    console.log("Mail:", mail);
    console.log("Selected Subject:", selectedSubject);
    console.log("Message:", message);
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.pageHeader}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            source={require("./assets/FinalLogo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.pageContentContainer}>
        <Text style={styles.label}> Full Name</Text>
        <TextInput
          // placeholder="Enter Your Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}> Mail</Text>
        <TextInput
          // placeholder="Enter Your Mail"
          style={styles.input}
          value={mail}
          onChangeText={setMail}
        />
        <Text style={styles.label}>Subject</Text>
        <View style={styles.dropdownContainer}>
          <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>
              {selectedSubject || "Select"}
            </Text>
          </TouchableOpacity>
          {isDropdownOpen && (
            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.option}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <Text style={styles.label}> Message</Text>
        <TextInput
          // placeholder="Message"
          style={[styles.input, styles.messageInput]}
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const sidebarRef = useRef(null);
  const [sidebarLayout, setSidebarLayout] = useState(null);

  const handleMenuPress = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageChange = (language) => {
    console.log("Selected language:", language);
  };

  const handleGoBack = () => {
    setSidebarOpen(false);
    setActivePage("home");
  };

  const handleOutsidePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    if (sidebarLayout) {
      const { x, y, width, height } = sidebarLayout;
      if (
        locationX < x ||
        locationX > x + width ||
        locationY < y ||
        locationY > y + height
      ) {
        setSidebarOpen(false);
      }
    }
  };

  const handleSidebarLayout = () => {
    if (sidebarRef.current) {
      sidebarRef.current.measure((x, y, width, height, pageX, pageY) => {
        setSidebarLayout({ x: pageX, y: pageY, width, height });
      });
    }
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          {isSidebarOpen ? (
            <FontAwesome name="times" size={24} color="black" />
          ) : (
            <FontAwesome name="bars" size={24} color="black" />
          )}
        </TouchableOpacity>

        <View style={styles.languageContainer}>
          <TouchableOpacity
            onPress={() => handleLanguageChange("English")}
            style={styles.languageButton}
          >
            <Text style={styles.languageText}>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleLanguageChange("Arabic")}
            style={styles.languageButton}
          >
            <Text style={styles.languageText}>AR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleLanguageChange("Hebrew")}
            style={styles.languageButton}
          >
            <Text style={styles.languageText}>HE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.contentContainer}>
          {activePage === "home" ? (
            <HomeContainer handleGoBack={handleGoBack} />
          ) : activePage === "register" ? (
            <RegisterPage handleGoBack={handleGoBack} />
          ) : activePage === "search" ? (
            <SearchPage handleGoBack={handleGoBack} />
          ) : activePage === "podcast" ? (
            <PodcastPage handleGoBack={handleGoBack} />
          ) : activePage === "contact" ? (
            <ContactPage handleGoBack={handleGoBack} />
          ) : null}

          {isSidebarOpen && (
            <ScrollView
              ref={sidebarRef}
              style={styles.sidebar}
              contentContainerStyle={styles.sidebarContentContainer}
              onLayout={handleSidebarLayout}
            >
              <TouchableOpacity
                onPress={() => handlePageChange("register")}
                style={styles.sidebarButton}
              >
                <Text style={styles.sidebarButtonText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePageChange("search")}
                style={styles.sidebarButton}
              >
                <Text style={styles.sidebarButtonText}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePageChange("podcast")}
                style={styles.sidebarButton}
              >
                <Text style={styles.sidebarButtonText}>Podcast</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePageChange("contact")}
                style={styles.sidebarButton}
              >
                <Text style={styles.sidebarButtonText}>Contact Us</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  menuButton: {
    padding: 8,
  },
  languageContainer: {
    flexDirection: "row",
  },
  languageButton: {
    paddingHorizontal: 8,
  },
  languageText: {
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    position: "relative",
  },
  homeContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: "white",
  },
  homeContentContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 75,
    resizeMode: "contain",
  },
  sidebar: {
    position: "absolute",
    width: "70%",
    height: "100%",
    zIndex: 2,
    backgroundColor: "rgba(245, 245, 245, 0.5)",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  sidebarContentContainer: {
    flexGrow: 1,
  },
  sidebarButton: {
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  sidebarButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  pageHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  pageContentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 8,
    alignSelf: "flex-start",
  },
  input: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dropdownContainer: {
    marginTop: 10,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdownText: {
    fontSize: 16,
    color: "#555555",
  },
  optionsContainer: {
    marginTop: 5,
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#555555",
  },
  messageInput: {
    width: "100%",
    height: 120,
  },
  sendButton: {
    backgroundColor: "#6cc070",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  datePicker: {
    width: 200,
  },
});
