import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchRecord from '../../components/SearchRecord/SearchRecord';
import { fetchAllRecords, recordUpdated } from '../../actions/index';
import SearchResults from '../../components/SearchResults/SearchResults';
import { listOfRecords, updatedRecord } from '../../reducers';
import UpdateRecord from '../../components/UpdateRecord/UpdateRecord';
/**
 * Home is main container
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: [],
      editItem: false,
      selectedItem: null
    };
    this.searchedItem = this.searchedItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    // fetch all the records
    this.props.getData();
  }

  componentWillReceiveProps(nextProps) {
    const { allRecords, setUpdatedData } = { ...nextProps };
    // update state as per new props data
    if (setUpdatedData && setUpdatedData.length)
      this.updateState(setUpdatedData, true);
    else this.updateState(allRecords, true);
  }

  updateState(allRecords) {
    this.setState({
      searchItem: allRecords
    });
  }

  searchedItem(searchItem) {
    if (!searchItem.length) return this.updateState([], false);
    this.updateState(searchItem, true);
  }

  editRecord(id) {
    let itemList = [...this.state.searchItem];
    itemList = itemList.find(list => list.id === id);
    this.setState({
      ...this.state,
      editItem: true,
      searchItem: [itemList]
    });
  }

  updateItem() {
    const allRecords = arguments[0];
    this.props.updateData(allRecords);
    this.setState({
      editItem: false,
      searchItem: []
    });
  }

  cancelEdit = () => {
    this.setState({
      editItem: false,
      searchItem: [...this.props.allRecords]
    });
  };

  render() {
    const { editItem } = { ...this.state };
    return (
      <section>
        {editItem ? null : (
          <div>
            <SearchRecord
              allItems={this.searchedItem}
              searchItem={this.props.allRecords}
            ></SearchRecord>
            <SearchResults
              listOfItems={this.state.searchItem}
              editRecord={id => this.editRecord(id)}
            />
          </div>
        )}
        {editItem ? (
          <UpdateRecord
            cancel={this.cancelEdit}
            updatedItems={this.updateItem}
            allRecords={this.state.searchItem[0]}
          />
        ) : null}
      </section>
    );
  }
}

Home.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  ),
  getData: PropTypes.func,
  updateData: PropTypes.func,
  setUpdatedData: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  allRecords: listOfRecords(state),
  setUpdatedData: updatedRecord(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData: fetchAllRecords,
      updateData: recordUpdated
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
