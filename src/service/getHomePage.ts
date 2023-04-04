export const query = /* GRAPHQL */ `
{
  landingPage {
    data {
      attributes {
        header {
          company
          navigator {
            id
            label
            path
          }
          button{
            label
            path
          }
        }
        carousel {
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
        welcome {
          greeting
          description
          picture {
            data {
              attributes {
                url
              }
            }
          }
        }
        park {
          title
          description
          greeting
          anchor
          picture {
              data {
                id
                attributes {
                  url
                }
              }
            }
          activities {
            title
            picture {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
        hotel{
          title
          description
          greeting
          anchor
          picture{
            data{
              id
              attributes{
                url
              }
            }
          }
          room{
            id
            title
            description
            wifi
            fridge
            breakfast
            air
            tv
            restaurant
            roomService
            left
            picture{
              data{
                id
                attributes{
                  url
                }
              }
            }
          }
        }
        lira{
          title
          description
          greeting
          anchor
          picture{
            data{
              id
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
}
`;
