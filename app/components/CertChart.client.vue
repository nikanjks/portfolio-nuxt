<script setup lang="ts">
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { certification, completions } from '~/data/portfolio'

// Register only the parts of ECharts we use (keeps the bundle small)
echarts.use([PieChart, TooltipComponent, LegendComponent, CanvasRenderer])

const chartEl = useTemplateRef<HTMLDivElement>('chartEl')
let chart: echarts.ECharts | undefined
let observer: ResizeObserver | undefined

// Count certificates per issuer from the real data
const counts = [certification, ...completions].reduce<Record<string, number>>((acc, c) => {
  acc[c.issuer] = (acc[c.issuer] ?? 0) + 1
  return acc
}, {})

onMounted(() => {
  if (!chartEl.value) return
  chart = echarts.init(chartEl.value)
  chart.setOption({
    color: ['#accbe1', '#c96c4a', '#b58edb', '#c7a33c'],
    tooltip: { trigger: 'item', formatter: '{b}: {c} certificate(s)' },
    legend: { bottom: 0, textStyle: { color: '#cee5f2' } },
    series: [
      {
        name: 'Certificates by issuer',
        type: 'pie',
        radius: ['45%', '70%'],
        center: ['50%', '45%'],
        itemStyle: { borderColor: '#3c5260', borderWidth: 3, borderRadius: 6 },
        label: { color: '#cee5f2', formatter: '{c}' },
        data: Object.entries(counts).map(([name, value]) => ({ name, value })),
      },
    ],
  })

  // Re-draw when the container size changes
  observer = new ResizeObserver(() => chart?.resize())
  observer.observe(chartEl.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  chart?.dispose()
})
</script>

<template>
  <div ref="chartEl" class="h-72 w-full" role="img" aria-label="Pie chart of certificates by issuer"></div>
</template>