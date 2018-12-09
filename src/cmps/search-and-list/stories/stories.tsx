import React from 'react';
import { connect } from 'react-redux';
import { getReadableStories, getArchivedStories } from '../../../selectors/story';
import { IStoreState } from '../../../models/store-state';
import StoriesGrid from './stories-grid/stories-grid';
import Button from '../../shared/button/button';
import { IHit } from '../../../models/search-result';

type Props = {
	store: IStoreState
};

type State = {
	showingStories: IHit[]
};

class Stories extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			showingStories: []
		};

		this.showArchived = this.showArchived.bind(this);
		this.showReadable = this.showReadable.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (this.props.store !== prevProps.store) {
			this.showReadable();
		}
	}

	showArchived() {
		this.setState({
			showingStories: getArchivedStories(this.props.store)
		});
	}

	showReadable() {
		this.setState({
			showingStories: getReadableStories(this.props.store)
		});
	}

	render() {
		return (
			<>
				<Button onClick={this.showArchived} cls="secondary">Show Archived</Button>
				<Button onClick={this.showReadable} cls="secondary">Show Readable</Button>
				<StoriesGrid stories={this.state.showingStories} />
			</>
		);
	}
}

const mapStateToProps = (state: IStoreState) => ({
	store: state
});

export default connect(
	mapStateToProps
)(Stories);