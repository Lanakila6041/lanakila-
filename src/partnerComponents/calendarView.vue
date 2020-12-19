<template>
    <div>
      <div>
			<el-row class="panel" style="padding:40px">
				<span class="title-name"
					style="color: rgb(94, 94, 94); font-weight: bolder; font-size: 18px;">Календар</span>
			</el-row>
		</div>
        <el-calendar>
  <!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
    </div>
</template>
