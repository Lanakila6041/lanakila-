<template>
	<div>
		<div>
			<el-row class="panel" style="padding:40px">
				<span class="title-name" style="color: rgb(94, 94, 94); font-weight: bolder; font-size: 18px;">Хийх
					ажлын жагсаалт</span>
			</el-row>
			<el-row>
				<el-col :span="22" style="margin-left:35px; padding:20px; background-color:rgb(244, 245, 247)">
					<!-- {{ListData[0]}} -->
					<template>
						<el-table :show-header='true' :data="ListData"
							style="width: 100%; border-radius:10px;font-weight:bolder;color:gray">
							<el-table-column fixed type="index" width="50">
							</el-table-column>
							<el-table-column prop="work_do_time" label="Гүйцэтгэх огноо" width="180" sortable>
								<template slot-scope="scope">
									<el-tag size="mini">
										<i class="el-icon-time"></i>
										<span style="margin-left: 10px">
											{{scope.row.work_do_time}}
										</span>
									</el-tag>
								</template>
							</el-table-column>
							<el-table-column prop="work_name" label="Төлөвлөсөн ажлын нэр">
								<template slot-scope="scope">
									<span>
											{{scope.row.work_name}}
									</span>
									<el-tag style="margin-left:10px" type="info" size="mini">{{scope.row.work_category}}</el-tag>
								</template>
							</el-table-column>
							<el-table-column prop="work_time_point" label="Гүйцэтгэх хугацаа" width="150">
								<template slot-scope="scope">
									<el-button size="mini" type="warning" circle>{{scope.row.work_time_point}}
									</el-button>
								</template>
							</el-table-column>
							<el-table-column prop="work_status" label="Төлөв" width="100">
								<template slot-scope="scope">
									<el-button @click="changeType(scope.row)" v-if="scope.row.work_status === 'TO DO'" size="mini" type="info" plain>
										{{scope.row.work_status}}</el-button>
									<el-button v-if="scope.row.work_status === 'done'" size="mini" type="success" plain>
										{{scope.row.work_status}}</el-button>
								</template>
							</el-table-column>
						</el-table>
						<el-button @click="showAddWorkDialog()" type="text"
							style="color:gray;font-weight:bolder;margin:10px" icon="el-icon-plus">Төлөвлөгөөт ажил нэмэх
						</el-button>
					</template>
				</el-col>
			</el-row>
		</div>
		<el-dialog title="Төлөвлөгөөт ажил нэмэх" :visible.sync="dialogVisible" width="30%">
			<el-form ref="form" :model="workForm" label-width="120px" size="mini" label-position="top">
				<el-form-item label="Ажлын нэр">
					<el-input v-model="workForm.work_name" placeholder="Та төлөвлөж буй ажлынхаа нэрийг оруулна уу"></el-input>
				</el-form-item>
				<el-form-item label="Ажлын тайлбар">
					<el-input v-model="workForm.work_description" placeholder="Та төлөвлөж буй ажлынхаа тайлбарыг оруулна уу"></el-input>
				</el-form-item>
				<el-form-item label="Ажлыг гүйцэтгэх хугацаа">
					<el-input-number v-model="workForm.work_time_point" :min="0" :max="10"></el-input-number>
				</el-form-item>
				<el-form-item label="Ажлыг гүйцэтгэх огноо">
					<el-date-picker style="width:100%" v-model="workForm.work_do_time" type="date" value-format="yyyy-MM-dd" placeholder="Ажлыг гүйцэтгэх огноог сонгож өгнө үү"></el-date-picker>
				</el-form-item>
				<el-form-item label="Таны нийт ангилаас аль ангилалд багтах вэ?">
					<el-select style="width:100%" v-model="workForm.work_category" placeholder="Ажилд хамаарах ангиллыг сонгоно уу">
						<el-option
						v-for="item in myCategories"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="Энэхүү ажлын төрлийг сонгоно уу">
					<el-select style="width:100%" v-model="workForm.work_type" placeholder="Энэхүү ажил нь ямар төрлийн ажил вэ?">
						<el-option
						v-for="item in myTypes"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button size="mini" @click="clearDialog()">Буцах</el-button>
				<el-button type="primary" size="mini" @click="addNewWork()">Ажлыг нийт төлөвлөгөөнд нэмэх</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	computed: {},
	components: {},
	created () {
		this.getWorkList()
	},
	data () {
		return {
			workForm: {
				work_do_time: '',
				work_name: '',
				work_description: '',
				work_time_point: 0,
				work_status: 'TO DO',
				work_type: '',
				work_category: '',
				created_at: ''
			},
			myCategories: [{
				value: 'Сүлжээ',
				label: 'Сүлжээ'
			}, {
				value: 'Төсөл',
				label: 'Төсөл'
			}, {
				value: 'Сүлжээний удирдлага',
				label: 'Сүлжээний удирдлага'
			}, {
				value: 'Алгоритм',
				label: 'Алгоритм'
			}
			],
			myTypes: [{
				value: 'high',
				label: 'Хэцүү'
			}, {
				value: 'medium',
				label: 'Дундаж'
			}, {
				value: 'easy',
				label: 'Амархан'
			}
			],
			ListData: [{
				work_do_time: '2020-12-25',
				work_name: 'Pizzahut web',
				work_description: 'Pizzahut web',
				work_time_point: 10,
				work_status: 'TO DO',
				work_type: 'High',
				work_category: 'Pizzahut',
				created_at: '2020-12-20'
			},
			{
				work_do_time: '2020-12-25',
				work_name: 'Pizzahut web',
				work_description: 'Pizzahut web',
				work_time_point: 10,
				work_status: 'TO DO',
				work_type: 'High',
				work_category: 'Pizzahut',
				created_at: '2020-12-20'
			},
			{
				work_do_time: '2020-12-25',
				work_name: 'Pizzahut web',
				work_description: 'Pizzahut web',
				work_time_point: 10,
				work_status: 'TO DO',
				work_type: 'High',
				work_category: 'Pizzahut',
				created_at: '2020-12-20'
			}
			],
			dialogVisible: false,
			sendUpdateData: {}
		}
	},
	methods: {
		changeType (data) {
			let payload = data
			this.$confirm('Та энэхүү ажлыг хийж дууссан уу?', 'Анхаар', {
				confirmButtonText: 'Тийм',
				cancelButtonText: 'Үгүй',
				type: 'warning'
			}).then(() => {
				axios.post('http://localhost:8000/api/workSearchIdUpdate', payload)
					.then((res) => {
						if (res.data.status === 200) {
							this.$notify({
								title: 'Амжилттай',
								message: 'Энэхүү ажлын төлөв өөрчлөгдлөө',
								type: 'success'
							})
							location.reload()
						} else {
							this.$notify({
								title: 'Анхаар',
								message: 'алдаа гарлаа',
								type: 'error'
							})
						}
					})
			}).catch(() => {
				this.$message({
					type: 'info',
					message: 'Delete canceled'
				})
			})
		},
		clearDialog () {
			this.workForm = {}
			this.dialogVisible = false
		},
		getWorkList () {
			axios.get('http://localhost:8000/api/getAllWorks').then(resp => {
				this.ListData = resp.data
			})
		},
		addNewWork () {
			axios.post('http://localhost:8000/api/addWorkNew', this.workForm)
				.then((res) => {
					if (res.data.status === 200) {
						this.$notify({
							title: 'Амжилттай',
							message: 'Таны төлөвлөгөөт ажил амжилттай үүслээ',
							type: 'success'
						})
						location.reload()
					} else {
						this.$notify({
							title: 'Анхаар',
							message: 'Бүртгэл үүсгэх явцад алдаа гарлаа',
							type: 'error'
						})
					}
				})
		},
		showAddWorkDialog () {
			this.dialogVisible = true
		}
	}
}

</script>
<style scoped>
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #e8e8e8;
		padding: 20px;
	}

	.bg-purple {
		background: #d3dce6;
		/* padding: 2px; */
		text-align: center;
		padding-top: 5px;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.row-item {
		margin: 10px;
		background-color: white;
		border: line;
	}

</style>
