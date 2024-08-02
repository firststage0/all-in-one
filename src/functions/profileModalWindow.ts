import { reactive } from 'vue'

export const isWindowActive = reactive({status: false});

export const toogleWindowStatus = () => {
	isWindowActive.status = !isWindowActive.status
}