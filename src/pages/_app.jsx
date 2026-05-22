import store from "@/redux/store";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import ReactModal from "react-modal";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const ProductModal = dynamic(
  () => import("@/components/common/product-modal"),
  { ssr: false }
);
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "swiper/css/bundle";
import "react-modal-video/scss/modal-video.scss";

import "../styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import "../styles/toast-overrides.scss";
// import { GoogleOAuthProvider } from "@react-oauth/google";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

// stripePromise
// const NEXT_PUBLIC_STRIPE_KEY = 'pk_test_51NYXCFGndYsQkAEFifIbJH64sZFMDpF7DcLYvUUN2az3VdK1M7qVPo7Z2j9rhunf3Pd0C3aFLENIxFriJWwx1P6a00lQFqaoc6';
// const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_KEY);
// const NEXT_PUBLIC_GOOGLE_CLIENT_ID = '375198830790-6lk26c7frudnqee2b55ge7fkbco1nkma.apps.googleusercontent.com'
export default function App({ Component, pageProps }) {
  return (
    // <GoogleOAuthProvider clientId={NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        {/* <Elements stripe={stripePromise}> */}
          <div
            id="root"
            className={`${inter.variable} ${plusJakarta.variable} ${inter.className}`}
          >
            <ThemeProvider>
              <Component {...pageProps} />
              <ProductModal />
            </ThemeProvider>
          </div>
        {/* </Elements> */}
      </Provider>
    // </GoogleOAuthProvider>
  )
}
