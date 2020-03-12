import Vue from "vue";

export default Vue.extend({
	created() {
		window.addEventListener("online", e => this._setOnline());
		window.addEventListener("offline", e => this._setOffline());
	},
	destroyed() {
		window.removeEventListener("online", e => this._setOnline());
		window.removeEventListener("offline", e => this._setOffline());
	},
	methods: {
		_setOnline(): void {
			this._isOnline = true;
		},
		_setOffline(): void {
			this._isOnline = false;
		}
	},
	computed: {
		isOnline: {
			get(): boolean {
				return this._isOnline;
			}
		}
	},
	data() {
		return {
			_isOnline: false
		};
	}
});
