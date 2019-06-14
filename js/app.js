let todo = [{
	id: 1,
	title: '吃饭',
	completed: true
},
{
	id: 2,
	title: '学习',
	completed: true
},
{
	id: 3,
	title: '写代码',
	completed: true
},
{
	id: 4,
	title: '打篮球',
	completed: false
},];
var app = new Vue({
	el: '#app',
	data: {
		inputText: '',
		todo1:[],
		todo2:[],
		todos:todo,
		currentEdit:null
	},
	methods: {
		// 添加数据
		handelAdd(e) {
			//  获取文本框数据
			// console.log(e.target.value);
			console.log(this.inputText);
			if (this.inputText.trim().length === 0) {
				return;
			}
			this.todos.push({
				id: Math.random(),
				title: this.inputText,
				completed: false
			})
			this.inputText = '';
		},
		// 删除单个数据
		removeTodo(index) {
			this.todos.splice(index, 1);
		},
		// 判断删除已完成函数的显示
		hasOneComplated() {
			const {
				todos
			} = this;
			let has = false;
			for (let i = 0; i < todos.length; i++) {
				const item = this.todos[i];
				if (item.completed === true) {
					has = true;
					break;
				}
			}
			return has;
		},
		// 删除已完成的数据
		handeleDeleteAllCOmpleted() {
			const {
				todos
			} = this;
			for (let i = 0; i < todos.length; i++) {
				if (todos[i].completed === true) {
					todos.splice(i, 1);
					//因为每次删除完数据，就会生成一个新的数组，而此时i的值要减一才能保证
					// 数组的下一个值得位置不会出现偏差
					i--;
				}
			}
		},
		// 显示未完成的target number
		getAllUnCompletedCount() {
			const {
				todos
			} = this;
			let count = 0;
			for (let i = 0; i < todos.length; i++) {
				if (todos[i].completed === false) {
					count++
				}
			}
			return count;
		},
		// 全选所有的target
		handleAllTarget(e) {
			const checked = e.target.checked;
			this.todos.forEach(element => {
				element.completed = checked
			});
		},
		// 通过target 的 status 来决定 allselect的值
		getTargetAllStatus() {
			let status = true;
			this.todos.forEach(element => {
				if (element.completed === false) {
					status = false;
					// foreach中不能加break，会报渲染错误
					// break;
				}
			});
			return status;
		},
		// 显示所有的target
		showAllTarget(){
			const {
				todos
			} = this;
			for(let i = 0;i<todos.length;i++){
              app.data[todos]=todo;
			}
		},
		// 只显示未完成的target
		showAllUnCompleted() {
			const {
				todos
			} = this;
			for(let i = 0;i<todos.length;i++){
               if(todos[i].completed === true){
				  todo1.push(todos[1]);
			   }
			}
			app.data[todos]= todo1;
		},
		// 显示所有已完成的target
		showAllCompleted(){
			const {
				todos
			} = this;
			for(let i = 0;i<todos.length;i++){
               if(todos[i].completed === false){
				   todos.splice(i,1);
				   i--;
			   }
			}
		},
	}
})
