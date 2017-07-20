import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null,
      showComponent: false
    };
    this.renderPlaylistForm = this.renderPlaylistForm.bind(this);
    this.closePlaylistForm = this.closePlaylistForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  renderPlaylistForm(e) {
    e.preventDefault();
    this.setState({
      showComponent: true,
    });
  }

  closePlaylistForm(e) {
    e.preventDefault();
    this.setState({
      showComponent: false,
    });
  }


  render () {
    const { playlists } = this.props;
    return(
      <div>
        <nav>
          <form>
          <button onClick={this.renderPlaylistForm}>New Playlist</button>
          {this.state.showComponent ?
             (<PlaylistForm
               closePlaylistForm={this.closePlaylistForm}
               createPlaylist={this.props.createPlaylist}
               />) :
             null
          }

            <ul className="playlist-list">
              {playlists.map((playlist) => (
                <div>

                <li className="playlist" key={playlist.id}>
                  <Link to={`/playlists/${playlist.id}`} className="playlist-name">{playlist.name}</Link>
                </li>
                <li>{playlist.name}</li>
                <li>By {playlist.creator_id}</li>
              </div>
              )
            )
          }
          </ul>
        </form>
        </nav>
      </div>
    )

  }
}

export default withRouter(PlaylistIndex);
