import React from "react";
import {
  CustomerReviews,
  Footer,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Hero,
  PopularProducts,
} from "./sections";
import Nav from "./components/Nav";
import Advertisement from "./sections/Advertisement";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="pb-10 pt-20">
        <Advertisement />
      </section>
      <section className="xl:padding-l sm:pt-0 sm:mt-0 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
