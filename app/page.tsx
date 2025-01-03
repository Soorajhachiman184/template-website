/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Homepage from "./index/page";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <><Head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/owl.carousel.min.js" />
<script src='https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap'/>
    </Head><div>
        <Homepage />

      </div></>
  );
}
