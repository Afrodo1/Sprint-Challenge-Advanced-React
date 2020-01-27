import React from 'react';

export default function PlayerCard (props){
    return(
        <div data-testid = "BoxCard" className = 'Box'>
            <h2 data- testid = 'nameCard' className = 'name'>{props.player.name}</h2>
            <div className = 'info'>
                <p>Country of Origin: {props.player.country}</p>
                <p>Times Searched: {props.player.searches}</p>
            </div>

        </div>
    )
}