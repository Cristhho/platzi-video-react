import React from 'react';
import Category from './category';
import Media from '../../playlist/components/media';
import Search from '../../widgets/containers/search';

function Categories(props) {
	return(
		<div className="content">
			<Search />
			{
				props.isLoading &&
					<p>Buscando...</p>
			}
			{
				props.search.size > 0 ?
					<section className="row playlist-wrapper search-results">
						<div className="row playlist">
						{
							props.search.map((item) => {
								return(
									<Media
										key={item.get('id')}
										openModal={props.handleOpenModal}
										{...item.toJS()}
									/>
								)
							})
						}
						</div>
					</section>
				:
					props.categories.map((category) => {
						return(
							<Category
								key={category.get('id')}
								{...category.toJS()}
								handleOpenModal={props.handleOpenModal}
							/>
						)
					})
			}
		</div>
	);
}

export default Categories;