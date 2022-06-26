import { CircleChordButton, CrossClose17Image } from '../../components'
import { useState } from 'react'
import React from 'react'

export function Slider({ className, children, chord, onCloseChordClick, ...props }) {
    return (
        <div className={`fixed bottom-10 w-11/12 left-[4%] h-3/5 bg-primary p-4 flex flex-col items-center gap-8 ${className}`} {...props}>

            <div className="w-full flex justify-between items-center">
                <CircleChordButton>{chord}</CircleChordButton>
                <button className="w-6 h-6"
                    onClick={onCloseChordClick}>
                    <CrossClose17Image />
                </button>
            </div>
            <p className="text-mygrey">Navigate between views for chord variants</p>
            <div className="overflow-scroll">
                {children}
            </div>
        </div>
    )
}

