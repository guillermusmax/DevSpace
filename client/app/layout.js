"use client"
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin']});

export const useStyles = {
  paperSmall: {
    marginTop: "30px",
    marginLeft: "40px",
    borderRadius: "25px",
    width: "608px",
    height: "650px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  paperBig: {
    backgroundColor: "white",
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "0px",
    marginLeft: "400px",
    height: "94.3vh",
    width: "700px",
    overflow: "auto"
  },
  divlinearProgressHead: {
    width: "280px",
    marginLeft: "50px",
    fontSize: "20px",
  },
  divlinearProgress: {
    width: "280px",
    marginLeft: "50px",
    marginTop: "50px",
    fontSize: "20px",
  },
  linearProgress: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  circularProgress: {
    borderRadius: "50px",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


