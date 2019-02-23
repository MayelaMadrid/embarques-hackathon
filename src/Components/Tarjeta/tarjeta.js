import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

class Tarjeta extends Component {

    render() {

        const styles = {
            card: {
              maxWidth: 250,
            },
            media: {
              height: 140,
            },
        }

        const {classes} = this.props;
        
        return (
            <div>
                <Card style={styles.card}>
                    <CardActionArea>
                        <CardMedia
                        style={styles.media}
                        image="../Login/img/road.jpeg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
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
        )
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tarjeta);