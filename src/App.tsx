import { useState } from 'react'
import './App.css'

import * as Slider from '@radix-ui/react-slider';

function Example({ step }: { step: number }) {
    const [value, setValue] = useState<number[]>([50]);

    return <Slider.Root value={value} step={step} onValueChange={setValue} onValueCommit={(v) => alert(v[0])} className={"slider"}>
        <Slider.Track className='track'>
            <Slider.Range className='range' />
        </Slider.Track>
    </Slider.Root>
}

export default Example