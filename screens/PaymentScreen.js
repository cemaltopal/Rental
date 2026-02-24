import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, Button, HelperText, List } from "react-native-paper";
import colors from "../constants/colors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import CarDetailsCard from "../components/common/CarDetails";
import dateTimeFormatter from "../components/common/dateTimeFormatter";
import { MaskedTextInput } from "react-native-mask-text";


const PaymentScreen = ({ route }) => {
  const orderSummary = route.params;
  console.log(orderSummary);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    cardNumber: Yup.string().max(16).required("Card Number is required"),
    expirationDate: Yup.string().required("Expiration Date is required"),
    cvv: Yup.string().max(3).required("CVV is required"),
  });

  const initialValues = {
    fullName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  const calculateTotal = () => {
    let total = 0;
    let pickupDate = new Date(orderSummary.pickupDate);
    let dropoffDate = new Date(orderSummary.dropoffDate);
    let diff = Math.abs(pickupDate - dropoffDate);
    console.log("zaman farkı: ",
      diff, 
      "saat olarak: ",
      diff / (1000 * 60 * 60)
    );
    let totalPrice = (orderSummary.pricePerHour * diff) / (1000 * 60 * 60);
    
    return totalPrice;
  };

  return (
    <ScrollView style={styles.container}>
      <CarDetailsCard data={orderSummary} />
        <List.Item
        title="Pickup Location"
        titleStyle={{ fontWeight: "bold"}}
        description={orderSummary.pickUpLocation}
        left={(props) => (
          <List.Icon {...props} icon="map-marker-right-outline" color={colors.color1} />    
        )}
      />
      <List.Item
        title="Drop Off Location"
        titleStyle={{ fontWeight: "bold" }}
        description={orderSummary.dropOffLocation}
        left={(props) => (
          <List.Icon {...props} icon="map-marker-left-outline" color={colors.color1} />
        )}
      />

      <List.Item
        title="Drop Off Location"
        titleStyle={{ fontWeight: "bold" }}
        description={orderSummary.dropOffLocation}
        left={(props) => (
          <List.Icon {...props} icon="map-marker-left-outline" color={colors.color1} />
        )}
      />

      <List.Item
        title="Pickup Date"
        titleStyle={{ fontWeight: "bold" }}
        description={dateTimeFormatter(orderSummary.pickupDate)}
        left={(props) => (
          <List.Icon {...props} icon="calendar-month-outline" color={colors.color1} />
        )}
      />

      <List.Item
        title="Drop Off Date"
        titleStyle={{ fontWeight: "bold" }}
        description={dateTimeFormatter(orderSummary.dropoffDate)}
        left={(props) => (
          <List.Icon {...props} icon="calendar-month-outline" color={colors.color1} />
        )}
      />

      <List.Item
        title="Total"
        titleStyle={{ fontWeight: "bold" }}
        description={calculateTotal().toFixed(2)}
        left={(props) => (
          <List.Icon {...props} icon="cash" color={colors.color1} />
        )}
      />
      <TextInput
        placeholder="Card Holder's Name"
        value={formik.values.fullName}
        onChangeText={formik.handleChange("fullName")}
        backgroundColor={colors.color7}
        style={{ padding: 5, marginTop: 10}}
        activeUnderlineColor={colors.color1}
        underlineColor="gray"
      />
      <HelperText type="error" visible={formik.errors.fullName}>
        {formik.errors.fullName}
      </HelperText>

      <TextInput
        placeholder="Card Number"
        value={formik.values.cardNumber}
        onChangeText={formik.handleChange("cardNumber")}
        backgroundColor={colors.color7}
        style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
        activeUnderlineColor={colors.color1}
        underlineColor="gray"
        keyboardType="numeric"
      />
      <HelperText type="error" visible={formik.errors.cardNumber}>
        {formik.errors.cardNumber}
      </HelperText>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column", flex: 3, marginRight: 10 }}>
          <TextInput
            placeholder="Expiration Date"
            value={formik.values.expirationDate}
            onChangeText={formik.handleChange("expirationDate")}
            backgroundColor={colors.color7}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
          />
          <HelperText type="error" visible={formik.errors.expirationDate}>
            {formik.errors.expirationDate}
          </HelperText>
        </View>

        <View style={{ flexDirection: "column" }}>
          <TextInput
            placeholder="CVV Number"
            value={formik.values.cvv}
            onChangeText={formik.handleChange("cvv")}
            backgroundColor={colors.color7}
            activeUnderlineColor={colors.color1}
            underlineColor="gray"
            keyboardType="numeric"
          />
          <HelperText type="error" visible={formik.errors.cvv}>
            {formik.errors.cvv}
          </HelperText>
        </View>

        <Button
          icon="credit-card"
          mode="contained"
          onPress={formik.handleSubmit}
          style={{ flex: 1, marginBottom: 40, backgroundColor: colors.color1 }}
        >
          Pay
        </Button>
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
