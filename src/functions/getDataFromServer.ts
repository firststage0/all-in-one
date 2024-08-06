import { ref } from "vue";
import { fetcher } from "./fetcher";
export const isLoading = ref(false);
export const jsonData = ref({});

const getData = async (url: string) => {
  const promise = fetcher(url);
  isLoading.value = true;
  promise.then((data) => {
    jsonData.value = data.Course;
    isLoading.value = false;
  });
}

export default getData;