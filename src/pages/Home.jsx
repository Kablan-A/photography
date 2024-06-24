// import { useQuery } from "react-query";
import mainImg from "../img/photographer.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import routs from "./routs";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { setLinkActive } from "../components/Navigation";

function Home() {
  const data = [
    {
      id: "17928608918880781",
      media_url:
        "https://scontent.cdninstagram.com/v/t51.29350-15/448334174_822347282812751_6768103690332996580_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=LgrJ9tubusIQ7kNvgESuRZe&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAjl2YL0MuBF-949pV-KxfHvsYVbyGjXG9VrH0DcSbSKg&oe=667F65D4",
      children: {
        data: [
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/448334174_822347282812751_6768103690332996580_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=LgrJ9tubusIQ7kNvgESuRZe&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAjl2YL0MuBF-949pV-KxfHvsYVbyGjXG9VrH0DcSbSKg&oe=667F65D4",
            id: "18037064167814343",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/448416044_1000008104989954_8162082384921494132_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=jy3AJynhzjIQ7kNvgFajgFG&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBrp3hsfZICvoCYmUIhiSgiH8_s2kBA-DsW1_91PUxuWQ&oe=667F5594",
            id: "18106498813392922",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/448499011_3720395798278346_4660186031838092800_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=4ivF1tqTNxoQ7kNvgGUKnjS&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBCZcW68WDwPiOF8C9wLaWqNU8hb-1kVfFbxKgnqkKMTg&oe=667F7A16",
            id: "17887015899047954",
          },
        ],
      },
    },
    {
      id: "17947385879733688",
      media_url:
        "https://scontent.cdninstagram.com/v/t51.29350-15/410745438_651187050509702_2980481865981003662_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=oa00Hxk2P4MQ7kNvgElYkIC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAo8YhxQjijFwJIvjl-58AIOr9lJCd5cp97f_aEuDy8Yw&oe=667F7C83",
      children: {
        data: [
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/410745438_651187050509702_2980481865981003662_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=oa00Hxk2P4MQ7kNvgElYkIC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAo8YhxQjijFwJIvjl-58AIOr9lJCd5cp97f_aEuDy8Yw&oe=667F7C83",
            id: "18188068597305123",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/410325409_2254820944710345_2955511826243498795_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=2MWLBGS7VqUQ7kNvgGy3-st&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYC31Cieyiuu4vfnF7tGXDFuoBIK8AZPnqkZJH0Q2g4uxw&oe=667F82AC",
            id: "18073793833441130",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/410243091_631733698963664_1161169716352046348_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=m03CtoU0TW0Q7kNvgHxm_Nu&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCveOPWs4JTvszXCq1q3nfrwJRi97Nnk-mhPTfQXNWqGg&oe=667F4E2E",
            id: "18132719242312786",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/410209185_892442382392577_4562897453459601397_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=54v9Q0wt2U0Q7kNvgFyB2GN&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBNDaETOAcxLNYRvm70n-vm5AakuzY5KKp5ek8dds72jw&oe=667F639C",
            id: "18055343467505248",
          },
        ],
      },
    },
    {
      id: "17963307419669984",
      media_url:
        "https://scontent.cdninstagram.com/v/t51.29350-15/409186650_724635796215098_5106573452189247497_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=lQANv-CAb-8Q7kNvgH9ji86&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAl5TYrGxjug9rBxa1kEJiLDocutcqf-OF3gt5iQSfiKQ&oe=667F54CA",
      children: {
        data: [
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/409186650_724635796215098_5106573452189247497_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=lQANv-CAb-8Q7kNvgH9ji86&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAl5TYrGxjug9rBxa1kEJiLDocutcqf-OF3gt5iQSfiKQ&oe=667F54CA",
            id: "17919660272753019",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/408881936_372924778627942_1676576426361457216_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=vx8JVVQhTFQQ7kNvgEuVBQ-&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCP7JvSZON_ydxoZdDg1p3alaGs4TPJHVY3X1q7-jPLBg&oe=667F69A4",
            id: "17997889520356088",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/409395691_2104278936592192_4548883491628333755_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=YyoVIQdugdQQ7kNvgE_sUFn&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA5fbBOjOIIVr2cR7HAwy9x6Iu4-LHUqLG8hV1-VCk98A&oe=667F70BB",
            id: "17975975852492115",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/409720408_1390334688560441_4874280658142663771_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=jgLwvRatBEwQ7kNvgFNxEff&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA_8jbWhJYv7QK9xjpVD5RNhjxJoOpZv_PLtUSDI_Apxw&oe=667F6DAB",
            id: "18276656734092474",
          },
        ],
      },
    },
    {
      id: "17963583454887005",
      media_url:
        "https://scontent.cdninstagram.com/v/t51.29350-15/300120929_850807512601704_2711796929897604820_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=UPidgzONsVAQ7kNvgHk4Tnh&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDqw78hu77i35VWaD4dPjBgqPioU6-HsRiB-e6Pb6f_4w&oe=667F57A7",
      children: {
        data: [
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/300120929_850807512601704_2711796929897604820_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=UPidgzONsVAQ7kNvgHk4Tnh&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDqw78hu77i35VWaD4dPjBgqPioU6-HsRiB-e6Pb6f_4w&oe=667F57A7",
            id: "18153078343252941",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/299989869_1422026518208512_4337105285097488472_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=6RxuPpAb5HsQ7kNvgFnDKh2&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCZ86-Up9mFhOVrY7297RiQoUiRqgUscRy175svdYN9fw&oe=667F6690",
            id: "17958364900938747",
          },
          {
            media_url:
              "https://scontent.cdninstagram.com/v/t51.29350-15/300619952_1408333776318478_4507135085129888453_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=cq3uX9uVP_0Q7kNvgE4TYXM&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDNCJvYPWZWcYSHvdahPSykK0z9QFnxTwVxJamalX-YVQ&oe=667F778F",
            id: "17855940683776774",
          },
        ],
      },
    },
  ];

  return (
    <main>
      <Container fluid>
        <Row>
          <Col xs={12} xl={6}>
            <div className="position-relative">
              <img src={mainImg} alt="photographer" className="w-100" />

              <div className="w-50 position-absolute top-50 translate-middle-y">
                <div className="container d-flex">
                  <span className="text-secondary fs-2 fw-lighter text-opacity-25">
                    -
                  </span>
                  <h1 className="text-white fs-2 fw-lighter text-opacity-25">
                    Let's take your photographs to next level
                  </h1>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} xl={6} className="pb-2">
            <div className="d-flex flex-column h-100">
              <article className="col-xl-9 mt-auto mb-5">
                <Card className="border-0 bg-primary">
                  <Card.Body className="p-0">
                    <Card.Title className="text-secondary display-2">
                      Jessie
                    </Card.Title>
                    <Card.Text className="text-white text-opacity-75">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </article>

              <div className="col-xl-9 text-white mb-2 d-flex align-items-center justify-content-between">
                <h3>Latest shots</h3>
                <Link
                  to={routs.shots}
                  className="text-secondary text-decoration-none"
                  onClick={() => setLinkActive(routs.shots)}
                >
                  View all
                </Link>
              </div>

              <Slider slides={data && data.map((post) => post.media_url)} />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
