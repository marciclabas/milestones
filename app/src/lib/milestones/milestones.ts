export type Milestone = {
  title: string;
  icon: string;
  description: string;
  levels: string[];
};

export type Category = {
  name: string;
  milestones: Record<string, Milestone>;
};

export const MILESTONES: Record<string, Category> = {
  foundations: {
    name: 'Foundations',
    milestones: {
      push: {
        title: 'PUSH',
        icon: '/icons/foundations/push.svg',
        description:
          "Push away any obstacle.",
        levels: [
          '50 Push-Ups',
          '20 Dips',
          '20 Archer Push-Ups',
          '10 One-Arm Push-Ups',
          '5 Chest-to-Wall HSPU',
          '1 Freestanding HSPU',
        ],
      },
      pull: {
        title: 'PULL',
        icon: '/icons/foundations/pull.svg',
        description:
          "Conquer gravity.",
        levels: [
          '20 Pull-Ups',
          '10 Weighted Pull-Ups (25% BW)',
          '5 Archer Pull-Ups',
          '1 One-Arm Pull-Up',
        ],
      },
      grip: {
        title: 'GRIP',
        icon: '/icons/foundations/grip.svg',
        description:
          "Hang in there.",
        levels: [
          '3min. Dead Hang',
          '2x1min. Single-Arm Hang',
          '20 Finger Push-Ups',
          '10 3-Finger Push-Ups',
          '1min. Finger Dead Hang',
          '30sec. One-Arm Finger Hang',
        ],
      },
      squat: {
        title: 'SQUAT',
        icon: '/icons/foundations/squat.svg',
        description:
          "Soar high, land deep.",
        levels: [
          '20 Slant Squats (50% BW)',
          '10 ATG Split Squats (50% BW)',
          '5 Knee Extensions (10% BW)',
        ],
      },
      hinge: {
        title: 'HINGE',
        icon: '/icons/foundations/hinge.svg',
        description:
          "Bend, don't break.",
        levels: [
          '20 Seated GMs (50% BW)',
          '10 Back Extensions (50% BW)',
          '10 Jefferson Curls (50% BW)',
          '1 Deadlift (1.5x BW)',
        ],
      },
      core: {
        title: 'CORE',
        icon: '/icons/foundations/core.svg',
        description:
          "Stand still against the crashing waves.",
        levels: [
          '50 V-Ups',
          '20 Toes-to-Bar',
          '10 Dragon Flags',
        ],
      },
    },
  },
  statics: {
    name: 'Statics',
    milestones: {
      'l-sit': {
        title: 'L-SIT',
        icon: '/milestone.svg',
        description:
          "The L-Sit demands balance, flexibility, and raw core power. Progress from tucks to the ultimate hold.",
        levels: ['5s Tucked L-Sit', '15s Full L-Sit', '30s Full L-Sit'],
      },
      crane: {
        title: 'CRANE',
        icon: '/milestone.svg',
        description:
          "The crane pose challenges balance and control. Progress toward smooth transitions and longer holds.",
        levels: ['10s Crane Hold', '30s Crane Hold', '1 Transition to Handstand'],
      },
      'h-stand': {
        title: 'H-STAND',
        icon: '/milestone.svg',
        description:
          "The handstand combines strength, balance, and control. A true display of mastery over your body.",
        levels: ['10s Wall Handstand', '15s Freestanding Handstand', '30s Freestanding Handstand'],
      },
      planche: {
        title: 'PLANCHE',
        icon: '/milestone.svg',
        description:
          "The planche is the pinnacle of static holds, demanding total body strength and balance.",
        levels: ['5s Tuck Planche', '10s Straddle Planche', '5s Full Planche'],
      },
      'f-lever': {
        title: 'F-LEVER',
        icon: '/milestone.svg',
        description:
          "The front lever tests your core and back strength like no other static hold. Elevate your game.",
        levels: ['5s Tuck Front Lever', '10s Advanced Front Lever', '10s Full Front Lever'],
      },
      'b-lever': {
        title: 'B-LEVER',
        icon: '/milestone.svg',
        description:
          "The back lever combines flexibility, strength, and control. Show your mastery over the bar.",
        levels: ['5s Tuck Back Lever', '10s Straddle Back Lever', '10s Full Back Lever'],
      },
    },
  },
  dynamics: {
    name: 'Dynamics',
    milestones: {
      'muscle-up': {
        title: 'MUSCLE UP',
        icon: '/milestone.svg',
        description:
          "The muscle-up is a true test of upper body strength and explosive power. Conquer the bar with style.",
        levels: ['1 Kip Muscle-Up', '1 Strict Muscle-Up', '3 Strict Muscle-Ups'],
      },
      '1push': {
        title: '1PUSH',
        icon: '/milestone.svg',
        description:
          "The one-arm push-up showcases ultimate pushing strength and stability. A feat of resilience.",
        levels: ['1 Each Side', '3 Each Side', '5 Each Side'],
      },
      '1pull': {
        title: '1PULL',
        icon: '/milestone.svg',
        description:
          "The one-arm pull-up is the ultimate test of upper body pulling strength. Dominate gravity.",
        levels: ['1 Each Side', '3 Each Side', '5 Each Side'],
      },
      'skin-the-cat': {
        title: 'SKIN THE CAT',
        icon: '/milestone.svg',
        description:
          "A dynamic move that combines flexibility, strength, and control. Swing through to success.",
        levels: ['1 Full Rep', '3 Reps', '5 Reps'],
      },
    },
  },
  endurance: {
    name: 'Endurance',
    milestones: {
      'horse-stance': {
        title: 'HORSE STANCE',
        icon: '/milestone.svg',
        description:
          "The horse stance is a true test of mental toughness and leg endurance. Hold the line.",
        levels: ['30s Hold', '1-Min Hold', '3-Min Hold'],
      },
      run: {
        title: 'RUN',
        icon: '/milestone.svg',
        description:
          "Running showcases your cardiovascular endurance and mental grit. Set the pace and go the distance.",
        levels: ['1K in 5 Minutes', '3K in 12 Minutes', '5K in 20 Minutes'],
      },
      swim: {
        title: 'SWIM',
        icon: '/milestone.svg',
        description:
          "Swimming builds stamina, strength, and control. Glide through the water with finesse.",
        levels: ['100m Freestyle', '500m Freestyle', '1K Freestyle'],
      },
    },
  },
  flexibility: {
    name: 'Flexibility',
    milestones: {
      pancake: {
        title: 'PANCAKE',
        icon: '/milestone.svg',
        description:
          "The pancake stretch builds flexibility and control in the hips and hamstrings. Stretch your limits.",
        levels: ['Touch Toes', 'Chest to Floor', '30s Hold Chest-to-Floor'],
      },
      'f-split': {
        title: 'F-SPLIT',
        icon: '/milestone.svg',
        description:
          "Front splits test your hip flexibility and symmetry. Progress step by step toward the ultimate stretch.",
        levels: ['Partial Split', 'Floor-Level Split', 'Flat Front Split'],
      },
      'm-split': {
        title: 'M-SPLIT',
        icon: '/milestone.svg',
        description:
          "Middle splits demand full control and flexibility. Find balance between strength and stretch.",
        levels: ['Partial Middle Split', 'Floor-Level Split', 'Flat Middle Split'],
      },
      compress: {
        title: 'COMPRESS',
        icon: '/milestone.svg',
        description:
          "Compression flexibility strengthens the core and hamstrings. Control your range like never before.",
        levels: ['Touch Toes', 'Chest-to-Thigh', 'Pancake with Lifted Legs'],
      },
    },
  },
  standards: {
    name: 'Standards',
    milestones: {
      'jefferson-curl': {
        title: 'JEFFERSON CURL',
        icon: '/milestone.svg',
        description:
          "The Jefferson Curl tests spinal and hamstring flexibility while building resilience. Stay strong and limber.",
        levels: ['10kg Curl', '20kg Curl', '30kg Curl'],
      },
      'atg-split-squat': {
        title: 'ATG SPLIT SQUAT',
        icon: '/milestone.svg',
        description:
          "The ATG Split Squat is the gold standard for knee and hip mobility. Unlock your lower body potential.",
        levels: ['Bodyweight Split Squat', '10kg Each Hand', '20kg Each Hand'],
      },
      nordic: {
        title: 'NORDIC',
        icon: '/milestone.svg',
        description:
          "The Nordic curl tests hamstring strength and resilience. Build explosive power and injury-proof legs.",
        levels: ['Eccentric Nordic', 'Full Nordic', 'Weighted Full Nordic (5kg)'],
      },
    },
  },
};
