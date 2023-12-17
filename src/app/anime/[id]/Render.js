"use client";
import {useState} from "react";
import styled from "styled-components";
import COLORS from "@/app/data/colors";
import Image from 'next/image';
import {FaCalendar} from "react-icons/fa6";
import Rating from "@/app/components/Rating";
import Genres from "@/app/components/genres";
import ReactCommonmark from "react-commonmark";
import EpisodeSection from "@/app/anime/components/EpisodeSection";
import Character from "@/app/components/Character";

const Cont = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    .image-holder {
        position: relative;
        width:200px;
        height:300px;
        
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
        
    }
    

    .header-content {
        @media  only screen and (max-width: 600px) {
            flex-direction: column;
        }
        @media  only screen and (max-width: 600px) {
            .left-header {
                flex-direction: column;
            }
            
        }
    }
    .header-text-section {
        padding: 16px;
    }
    
    .image-header{
        position: relative;
        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgb(46,53,89);
            background: linear-gradient(90deg, rgba(46,53,89,1) 0%, rgba(255,255,255,0) 51%, rgba(46,53,89,1) 100%);
            opacity: 0.4;
        }
    }
`;

const Anime = ({ anime }) => {
    console.log('anime');
    console.log(anime);
    // set dates
    const startDate = new Date(anime.startDate.year, anime.startDate.month, anime.startDate.day);
    const endDate = new Date(anime.endDate.year, anime.endDate.month, anime.endDate.day);

    const characterElems = anime.characters.edges.map((character, index) => {
       return (
           <Character
               key={index}
               character = {character.node}
           />
       )
    });

    return (
        <Cont colors = {COLORS}>
            <div className="image-header">
                <div className="overlay"></div>
                <img src={anime.bannerImage} alt={anime.title}/>
            </div>


            <div className="header-content flex space-between mar-bottom-32">

                {/** Left header section **/}
                <div className="left-header flex space-between">
                    <div className="image-holder">
                        <img src = {anime.coverImage.extraLarge} alt = {anime.title.userPreferred} fill style = {{objectFit:'cover'}}/>
                    </div>
                    <div className='header-text-section'>
                        <h1 className='mar-bottom-16'>{anime.title.english}</h1>
                        <table className='styled-table'>
                            <tbody>
                                <tr>
                                    <td>
                                        <FaCalendar className='icon-ssm grey'/>
                                        <p>Release</p>
                                    </td>
                                    <td>
                                        <p className='bold'>
                                            {startDate.toDateString()}
                                        </p>
                                       </td>
                                </tr>

                            <tr>
                                <td>
                                    <FaCalendar className='icon-ssm grey' />
                                    <p>End</p>
                                </td>

                                <td>
                                    <p className="bold">
                                        {endDate.toDateString()}
                                    </p>

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <p className="bold">Episodes</p>
                                </td>
                                <td>
                                    <p className="bold">
                                        {anime.episodes}
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/** End of left header section **/}

                {/** Right header section **/}
                <div className=''>
                    <div className="mar-bottom-16 ">
                        <Rating
                            percent={anime.averageScore}
                        />
                    </div>
                    <Genres
                        genreList={anime.genres}
                        />
                </div>


                {/** End of right header section **/}
            </div>

            <div className="content-box mar-bottom-32">
                <div className="text-content">
                    <h2>About This Anime</h2>
                    <div className="black-line mar-bottom-16"></div>
                    {/*<ReactCommonmark*/}
                    {/*    source = {anime.description}*/}
                    {/*/>*/}
                </div>

            </div>

            {/** Episodes **/}
            <div className="content-box">
                <div className="text-content">
                    <h2>Episodes</h2>
                    <div className="black-line mar-bottom-16"></div>


                    <EpisodeSection
                        episodes={anime.streamingEpisodes}
                    />
                </div>

            </div>
            {/** End of episodes **/}

            {/** Characters **/}
            <div className="content-box">
                <div className="text-content">
                    <h2>Characters</h2>
                    <div className="black-line mar-bottom-16"></div>
                    <div className="flex flex-wrap al">
                        {characterElems}
                    </div>
                </div>
            </div>
            {/** End of characters **/}

        </Cont>
    )
};

export default Anime;