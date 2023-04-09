# react-web-animation

<p align="center">
  <img src="https://github.com/RinconStrategies/react-web-animation/blob/master/react_gif.gif" />
</p>


[![build status](https://travis-ci.org/bringking/react-web-animation.svg?branch=master)](https://travis-ci.org/bringking/react-web-animation)
[![npm version](https://img.shields.io/npm/v/react-web-animation.svg?style=flat-square)](https://www.npmjs.com/package/react-web-animation)
[![npm downloads](https://img.shields.io/npm/dm/react-web-animation.svg?style=flat-square)](https://www.npmjs.com/package/react-web-animation)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Usage
import React, { Component } from 'react';
import { Animated } from 'react-web-animation';


export default class Basic extends Component {

    getKeyFrames() {
        return [
            { transform: 'scale(1)',    opacity: 1,     offset: 0 },
            { transform: 'scale(.5)',   opacity: 0.5,   offset: 0.3 },
            { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
            { transform: 'scale(.6)',   opacity: 0.6,   offset: 1 }
        ];
    }

    getTiming( duration ) {
        return {
            duration,
            easing: 'ease-in-out',
            delay: 0,
            iterations: 2,
            direction: 'alternate',
            fill: 'forwards'
        };
    }

    render() {
        return
            <Animated.div keyframes={this.getKeyFrames()}
                       timing={this.getTiming(2500)}>
                    Web Animations API Rocks
            </Animated.div>;
    }
}

![example animation](./src/assets/comparison.gif)
