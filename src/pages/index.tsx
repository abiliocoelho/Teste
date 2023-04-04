import { client } from "@/service/api";
import { query } from "@/service/getHomePage";
import styles from "@/styles/Home.module.scss";
import { GetStaticProps } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type LandinPageProps = {
  landingPage: {
    data: {
      attributes: {
        header: {
          company: string;
          // navigator: NavProps[];
          button: {
            hasButton: boolean;
            label: string;
            path: string;
          };
        };
        // carousel: PictureProps[];
        welcome: {
          greeting: string;
          description: string;
          // picture: WelcomePictureProps;
        };
        park: {
          anchor: string;
          greeting: string;
          title: string;
          description: string;
          // picture: EcoParquePictureProps;
          // activities: ActivitiesProps[];
        };
        lira: {
          greeting: string;
          title: string;
          description: string;
          anchor: string;
          // picture: LiraPictureProps;
        };
        hotel: {
          anchor: string;
          greeting: string;
          title: string;
          description: string;
          // picture: HotelPictureProps;
          // room: RoomProps[];
        };
      };
    };
  };
};

export default function Home({ landingPage }: LandinPageProps) {
  console.log(landingPage.data.attributes.header.company);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>
          {landingPage.data.attributes.header.company}
        </h1>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  landingPage: LandinPageProps;
}> = async () => {
  const { landingPage }: any = await client.request(query);
  return {
    props: {
      landingPage,
    },
    revalidate: 30,
  };
};
