import { reactive, ref, watch } from 'vue'

export const isWindowActive = reactive({
	"profile": {status: false}, 
	"newTheme": {status: false},
	"editTheme": {status: false},
	"deleteTheme": {status: false},
  "newLesson": {status: false},
  "editLesson": {status: false},
  "deleteLesson": {status: false},
});

export const toogleWindowStatus = (windowName: string) => {
	isWindowActive[windowName].status = !isWindowActive[windowName].status
}

watch(isWindowActive, () => {
  console.log(isWindowActive);
  
  const isScrollBlocked = ref(false);
  for (const key in isWindowActive) {
    if (isWindowActive[key].status) {
      isScrollBlocked.value = true;
      break;
    }
  }
  if (isScrollBlocked.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
});