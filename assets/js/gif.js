
// import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    giphy: {
      type: "app",
      app: "giphy",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `api.giphy.com/v1/gifs/random`,
      params: {
        api_key: `${this.giphy.$auth.api_key}`,
      },
    })
  },
})
