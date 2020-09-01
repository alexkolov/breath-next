import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { phases } from '../data/programs';
import { isBrowser } from '../utils/core';
import { Program } from '../utils/program';
import { BackButton } from '../components/BackButton';
import { Label } from '../components/Label';
import { TimeSelector } from '../components/TimeSelector';
import { ToggleButton } from '../components/ToggleButton';
import styles from '../styles/Exercise.module.css';
import beepAudio from '../public/beep.mp3'

let noSleep;
let beep;

(async () => {
  console.log('Initing...');
  if(isBrowser()) {
    const NoSleep = (await import('nosleep.js')).default;
    noSleep = new NoSleep();
    beep = new Audio(beepAudio);
  } else {
    noSleep = { enable() {}, disable() {} };
    beep = { play() {} };
  }
  console.log('Initing done');
})();

const program = new Program(phases, 90);
let counter;

export default function Exercise() {
  console.log('Exercise init');
  const [state, setState] = useState(program.state);

	const updateTimeTotal = (seconds) => {
		program.timeTotal = seconds;
		setState(program.state);
	};

	const run = () => {
		if (program.forward()) {
			beep.play();
			counter = setTimeout(
				() => run(),
				program.currentPhase.length * 1000
			);
		}
		setState(program.state);
	};

	const stop = () => {
		program.stop();
		setState(program.state);
		if (counter) {
			clearTimeout(counter);
		}
	};

	const toggle = () => {
		if (!program.isActive) {
			noSleep.enable();
			run();
		} else {
			noSleep.disable();
			stop();
		}
	};

  return (
    <div className={styles.Host}>
      <BackButton />

      <h1>Exercise</h1>

      <div className={styles.Middle}>
				<Label phase={state.currentPhase} />
				<TimeSelector
					seconds={state.timeStats.timeTotal}
					onChange={updateTimeTotal}
				/>
			</div>

			<div className={styles.Bottom}>
				<ToggleButton
					onToggle={toggle}
					icon={state.isActive ? 'break' : 'play'}
				/>
			</div>
    </div>
  );
}
