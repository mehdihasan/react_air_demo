import React, { Component } from 'react';
import MsImage from "./msimage";
import MsParagraph from "./msp";
import LikeButton from "./likebutton";

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="ms_item_holder"> 
                <div className="default-padding">
                    <MsImage
                        url="https://a0.muscache.com/im/pictures/dad3cd3f-4324-4941-b3bb-658072f4caec.jpg"
                        width="100%"
                        height="auto" />

                    <div class="ms_item_cat">
                        <MsParagraph
                            text="LATIN FOOD" />
                    </div>

                    <div class="ms_item_title">
                        <MsParagraph
                            text="Little Havana Food & Cultural Tour" />
                    </div>

                    <div class="ms_item_price">
                        <MsParagraph
                            text="$59 per person" />
                    </div>

                    <div className="ms-item-like-container">
                        <LikeButton />
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;