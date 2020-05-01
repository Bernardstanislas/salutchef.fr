import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="justify-center items-center hidden md:flex h-screen">
        <h1 className="text-xl">Rendez-vous sur mobile !</h1>
      </div>
      <div className="md:hidden">
        <Component {...pageProps} />
      </div>
    </>
  );
}
