import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: { fontFamily: {
      'inter':["Inter","sans-serif"]
    },
    colors: {
      'primary':"#009FBD",
      'shimmer': '#D6D9E0',
    }
  },
  },
  plugins: [],
});
 