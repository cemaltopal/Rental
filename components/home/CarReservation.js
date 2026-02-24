import { StyleSheet, Text, View } from "react-native";
import React, { useState, useCallback } from "react";
import {
  Card,
  Title,
  Paragraph,
  Button,
  TextInput,
  HelperText,
  Portal,
  Modal,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DatePickerModal, tr } from "react-native-paper-dates";
import { registerTranslation, enGB } from "react-native-paper-dates";
import colors from "../../constants/colors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

registerTranslation("en", enGB);

const CarReservationForm = ({ data }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [reservationSuccessState, setReservationSuccessState] = useState({
    success: true,
    message: "Your Reservation Request Has Been Sent",
  });
  const navigation = useNavigation();
  const [orderSummary, setOrderSummary] = useState({});

  //FORMİK STATES
  const validationSchema = Yup.object().shape({
    pickupLocation: Yup.string().max(250).required(" Bu alan Boş geçilemez"),
    dropoffLocation: Yup.string().max(250).required("Bu alan Boş geçilemez"),
    pickupDate: Yup.date().required("Bu alan Boş gelemez"),
    dropoffDate: Yup.date().required("Bu alan Boş gelemez"),
  });

  const formik = useFormik({
    initialValues: {
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: "",
      dropoffDate: "",
    },
    onSubmit: (values) => {
      console.log(data.id);
      console.log(values);
      setOrderSummary({ ...data, ...formik.values });
      showModal();
    },
    validationSchema,
  });

  //END FORMİK STATES

  //Date Picker States
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [open, setOpen] = useState(false);
  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
      formik.setFieldValue("pickupDate", startDate);
      formik.setFieldValue("dropoffDate", endDate);
      console.log(range);
    },
    [setOpen, setRange],
  );

  //End Date Picker States

  /* MODAL DEĞİŞKENLERİ */
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  /* MODAL DEĞİŞKENLERİ SON */

  return (
    <View style={{ margin: 20 }}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <Title
            style={
              reservationSuccessState.success ? styles.success : styles.fail
            }
          >
            Reservation Request:{" "}
            {reservationSuccessState.success ? "Successful" : "Not Avaliable"}
          </Title>
          <Text>{reservationSuccessState.message}</Text>

          {!reservationSuccessState.success ? (
            <Button
              onPress={hideModal}
              mode="contained"
              style={{ ...styles.button, marginTop: 20 }}
            >
              OK
            </Button>
          ) : (
            <Button
              onPress={() =>
                navigation.navigate("PaymentScreen", {
                   ...orderSummary,
                  pickupDate: JSON.stringify(formik.values.pickupDate),
                  dropoffDate: JSON.stringify(formik.values.dropoffDate),
                
                 })
              }
              mode="contained"
              style={{ ...styles.button, marginTop: 20 }}
            >
              MAKE PAYMENT
            </Button>
          )}
        </Modal>
      </Portal>
      <TextInput
        placeholder="Pickup Location"
        value={formik.values.pickupLocation}
        onChangeText={formik.handleChange("pickupLocation")}
        backgroundColor={colors.color7}
        style={{ padding: 5 }}
        activeUnderlineColor={colors.color1}
        underlineColor="gray"
      />
      <HelperText type="error" visible={formik.errors.pickupLocation}>
        {formik.errors.pickupLocation}
      </HelperText>
      <TextInput
        placeholder="Drop off Location"
        value={formik.values.dropoffLocation}
        onChangeText={formik.handleChange("dropoffLocation")}
        backgroundColor={colors.color7}
        style={{ padding: 5 }}
        activeUnderlineColor={colors.color1}
        underlineColor="gray"
      />
      <HelperText type="error" visible={formik.errors.dropoffLocation}>
        {formik.errors.dropoffLocation}
      </HelperText>
      {/*Zaman seçimi*/}
      <SafeAreaProvider style={{ marginTop: 10, borderRadius: 10 }}>
        <View
          style={{
            width: "100%",
          }}
        >
          <Button
            onPress={() => setOpen(true)}
            uppercase={false}
            mode="outlined"
            style={styles.dateTimeButton}
          >
            <Text style={{ color: "black" }}>Pick range</Text>
          </Button>
          <DatePickerModal
            locale="en"
            mode="range"
            visible={open}
            onDismiss={onDismiss}
            startDate={formik.values.pickupDate}
            endDate={formik.values.dropoffDate}
            onConfirm={onConfirm}
          />
        </View>
      </SafeAreaProvider>
      <HelperText type="error" visible={formik.errors.pickupDate}>
        {formik.errors.pickupDate} {formik.errors.dropoffDate}
      </HelperText>

      <View style={{ marginTop: 10 }}>
        <Button
          onPress={formik.handleSubmit}
          mode="contained"
          style={styles.button}
        >
          <Text style={{ color: "white" }}>Book Now</Text>
        </Button>
      </View>
    </View>
  );
};

export default CarReservationForm;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 5,
    borderRadius: 30,
    backgroundColor: colors.color4,
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    height: 300,
    borderRadius: 10,
  },
  success: {
    color: "green",
  },
  fail: {
    color: "red",
  },
});
