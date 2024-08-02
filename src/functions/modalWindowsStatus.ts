import { reactive } from 'vue'

export const isWindowActive = reactive({
	"profile": {status: false}, 
	"acriveRefferal": {status: false},
	"connectedRefferal": {status: false},

});

export const toogleWindowStatus = (windowName: string) => {
	isWindowActive[windowName].status = !isWindowActive[windowName].status
}