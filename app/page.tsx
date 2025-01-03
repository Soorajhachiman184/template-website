/* eslint-disable @next/next/no-page-custom-font */
 
import Head from "next/head";
import Homepage from "./main/page";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <><Head>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/owl.carousel.min.js"
      async
    ></script>
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
      rel="stylesheet"
    />
  </Head>
    
    <div>
        <Homepage />

      </div></>
  );
}
