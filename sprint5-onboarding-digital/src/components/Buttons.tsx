import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid"
import { MouseEventHandler } from "react"

interface ButtonProps {
	showButton: boolean
	buttonMethod: MouseEventHandler<HTMLButtonElement> | undefined
}

export const PrevButton = ({showButton, buttonMethod}: ButtonProps) => {
	if (showButton) {
		return (
			<button onClick={buttonMethod} className="bg-white p-3 rounded-full border-solid border-black border">
				<ArrowLeftIcon className="size-6 text-black" />
			</button>
		)
	}
}

export const NextButton = ({showButton, buttonMethod}: ButtonProps) => {
	if (showButton) {
		return (
			<button onClick={buttonMethod} className="bg-black p-3 rounded-full ml-2">
				<ArrowRightIcon className="size-6 text-white" />
			</button>
		)
	}
}