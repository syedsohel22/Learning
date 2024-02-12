import CheckoutStepper from "./components/Stepper";
import "./App.css";
const App = () => {
  const CHECKOUT_STEPSE = [
    {
      name: "Customer Info",
      component: () => <div>Provide your contact details</div>,
    },
    {
      name: "Shipping Info",
      component: () => <div>Provide your shipping details</div>,
    },
    {
      name: "Payment",
      component: () => <div>Complete payment for your details</div>,
    },
    {
      name: "Delivered",
      component: () => <div>your order has been deliverd</div>,
    },
  ];
  return (
    <>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPSE} />
    </>
  );
};

export default App;
