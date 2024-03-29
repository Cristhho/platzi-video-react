import {createStore} from 'redux';

const $form = document.getElementById('form');
const $title = $form.querySelector('input');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData($form);
	const title = data.get('title');
	store.dispatch({
		type: 'ADD_FRAMEWORK',
		payload: {
			title
		}
	})
	$title.value = '';
}

const initialState = [
	{
		"title": "React"
	},
	{
		"title": "Redux"
	},
	{
		"title": "Angular"
	}
]

const reducer = function(state, action) {
	switch(action.type){
		case 'ADD_FRAMEWORK':
			return [...state, action.payload]
		default:
			return state
	}
}

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render() {
	const $container = document.getElementById("playlist");
	const playlist = store.getState();

	$container.innerHTML = '';

	playlist.forEach((item) => {
		const template = document.createElement("p");
		template.textContent = item.title;
		$container.appendChild(template);
	});
}
render();

function handleChange() {
	render();
}

store.subscribe(handleChange)
