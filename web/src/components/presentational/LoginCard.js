import React from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({

})

class LoginCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes } = this.props;

        return(
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt="Coffee"
                        className={classes.media}
                        height="140"
                        image="./coffee-time.gif"
                        title="Coffee"
                    >
                    </CardMedia>
                </CardActionArea>
            </Card>
        );
    }
}

LoginCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginCard);