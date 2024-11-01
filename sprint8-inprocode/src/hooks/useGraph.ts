/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useTranslation } from 'react-i18next'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const useGraph = (weekData: number[], currentDay: number | null) => {
  const { t } = useTranslation()
  const weekDays = [t('short_monday'), t('short_tuesday'), t('short_wednesday'), t('short_thursday'), t('short_friday'), t('short_saturday'), t('short_sunday')]
  const barBgColor = 'rgba(236, 118, 92, 1)'
  const currentBarBgColor = 'rgba(115, 182, 190, 1)'
  const greyColor = 'rgba(195, 194, 190, 1)'
  const backgroundColors = []

  for (let i = 0; i <= 6; i++) {
    backgroundColors[i] = barBgColor
  }

  if (currentDay !== null) {
    backgroundColors[currentDay] = currentBarBgColor
  }

  const chartData = {
    labels: weekDays,
    datasets: [
      {
        label: t('chart.datasets_label'),
        data: weekData,
        backgroundColor: backgroundColors,
        borderRadius: 5,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
            title: function(context: any) {
              const currentLabel = context[0].label
              switch(currentLabel) {
                case t('short_monday'):
                  return t('monday')
                case t('short_tuesday'):
                  return t('tuesday')
                case t('short_wednesday'):
                  return t('wednesday')
                case t('short_thursday'):
                  return t('thursday')
                case t('short_friday'):
                  return t('friday')
                case t('short_saturday'):
                  return t('saturday')
                case t('short_sunday'):
                  return t('sunday')
              }
            }
        }
    }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: greyColor,
        }
      },
      y: {
        min: 0,
        display: true,
        border:{
          dash: [6, 6]
        },
        grid: {
          display: true,
          color: function(context: any) {
            const ticksY = context.chart.scales.y.ticks
            const arrValues: number[] = ticksY.map((o: any) => o.value)
            arrValues.sort((a, b) => b - a)
            const secondMaxValueY = arrValues[1]
            // Se dibuja cuando el valor de la línea es igual al segundo valor más alto del eje Y
            if (context.tick.value === secondMaxValueY) {
              return greyColor // Color de la línea
            }
            return 'transparent' // No mostrar otras líneas de cuadrícula
          },
        },
        ticks: {
          callback: function(value: number | string, _index: number, values: any) {
            const arrValues: number[] = values.map((o: any) => o.value)
            arrValues.sort((a, b) => b - a)
            const secondMaxValueY = arrValues[1]
            if (value === 0 || value === secondMaxValueY) {
              return value
            }
            return ''
          },
          color: greyColor
        },
      }
  }
  }

  return { chartData, options }
}