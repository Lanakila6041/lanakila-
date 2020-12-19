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
									<el-tag v-if="scope.row.work_status === 'TO DO'" size="mini" type="info">
										{{scope.row.work_status}}</el-tag>
									<el-tag v-if="scope.row.work_status === 'DONE'" size="mini" type="success">
										{{scope.row.work_status}}</el-tag>
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
		<el-dialog title="Төлөвлөгөөт ажил нэмэх" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>Төлөвлөгөөт ажил нэмэх</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">Cancel</el-button>
				<el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
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
			dialogVisible: false
		}
	},
	methods: {
		getWorkList () {
			axios.get('http://localhost:8000/api/getAllWorks').then(resp => {
				this.ListData = resp.data
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
