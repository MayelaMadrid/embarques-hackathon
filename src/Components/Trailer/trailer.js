import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import * as auth from '../../api/actions/auth';
import './trailer.css';

class Trailer extends Component {

    /*state = {
        trailerList: []
    }*/

    /*componentWillMount(){
        this.props.getTrailers();
    }*/

    render() {

        const styles = {
            card: {
              maxWidth: 250,
            },
            media: {
              height: 140,
            },
        }

        return (
            <div className="trailerBackground">
                <div className="formTitle">
                    <i className="fas fa-truck-moving"></i> Trailer
                </div>
                <div className="formBody">
                    <Card style={styles.card}>
                        <CardActionArea>
                            <CardMedia
                            style={styles.media}
                            image="../Login/img/road.jpeg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography component={'span'} gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group  
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // trailerList: state.Api.getTrailers.getTrailers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        /*getTrailers: () => {
            return auth.getTrailers()(dispatch);
        }*/
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trailer);