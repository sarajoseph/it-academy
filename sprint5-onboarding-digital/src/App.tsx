import { useState } from 'react'
import './css/tailwind-output.css'
import './css/main.css'
import { Card } from './components/Card'


export const App = () => {
  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaras una millora ràpidament.',
      bgColor: '4da2a9',
      imageUrl: './src/assets/time_management.svg',
      prevButton: false,
      nextButton: true
    },    
    {
      title: 'Programa projectes propies',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      bgColor: 'd3d4d9',
      imageUrl: './src/assets/programming.svg',
      prevButton: true,
      nextButton: true
    },    
    {
      title: 'Procura descansar',
      description: 'Descansar bé i desconnectar són vitals. D\'aquesta manera reduiràs l\'estrès i l\'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
      bgColor: 'ffd167',
      imageUrl: './src/assets/meditation.svg',
      prevButton: true,
      nextButton: false
    }
  ]

  const [step, setStep] = useState(0)

  const nextStep = (): void => {
    if(step < tutorialData.length-1){
      setStep(prev => prev + 1)
    }
  }

  const prevStep = (): void => {
    if(step > 0){
      setStep(prev => prev - 1)
    }
  }

  const setCurrentStep = (x: number): void => {
    setStep(x)
  }

  return (
    <Card 
      title={tutorialData[step].title} 
      description={tutorialData[step].description} 
      imageUrl={tutorialData[step].imageUrl} 
      bgColor={tutorialData[step].bgColor} 
      nextStepFN={nextStep}
      prevStepFN={prevStep}
      prevButton={tutorialData[step].prevButton}
      nextButton={tutorialData[step].nextButton}
      totalSteps={tutorialData.length}
      currentStep={step}
      setCurrentStep={setCurrentStep}
    />
  )
}