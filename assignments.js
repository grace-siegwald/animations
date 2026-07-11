/* ============================================================
   EDIT YOUR ASSIGNMENTS HERE.
   This one array powers both the gallery page and the detail page —
   you never need to touch the HTML to add, remove, or reorder work.

   Fields:
     id          – unique string, also used in the URL (e.g. video.html?id=07)
     frame       – short label shown in the mono "frame counter" tag
     title       – assignment title
     due         – due date shown on the card
     score       – grade shown on the card
     video       – path to the mp4, relative to these HTML files
     poster      – (optional) path to a still image shown before the video loads
     description – paragraph shown on the detail page
   ============================================================ */

const ASSIGNMENTS = [
  {
    id: "01",
    frame: "F01",
    title: "Pendulum-like Animation",
    due: "Sep 8",
    score: "10/10",
    video: "videos/Siegwald_Grace_Pendulum.mov",
    poster: "",
    description:
      "A first pass at timing and spacing: a simple pendulum swing built to study easing in and out of an arc, and how spacing between frames communicates speed."
  },
  {
    id: "02",
    frame: "F02",
    title: "Ball Bounce with Three Different Weights",
    due: "Sep 15",
    score: "10/10",
    video: "videos/Siegwald_Grace_BouncingBall.mp4",
    poster: "",
    description:
      "Three balls of different implied weight, bouncing side by side, to compare how arc height, squash and stretch, and timing shift with mass."
  },
  {
    id: "03",
    frame: "F03",
    title: "Moving Pendulum with Overlap",
    due: "Sep 22",
    score: "10/10",
    video: "videos/Siegwald_Grace_PendulumOverlap_v2.mp4",
    poster: "",
    description:
      "Builds on the earlier pendulum study by adding overlapping action and drag, so secondary elements settle after the main motion stops."
  },
  {
    id: "04",
    frame: "F04",
    title: "Ball with Tail Navigating an Obstacle Course",
    due: "Sep 29",
    score: "9/10",
    video: "videos/Siegwald_Grace_ObstacleCourse.mp4",
    poster: "",
    description:
      "A ball with a trailing tail moves through a short obstacle course, combining follow-through on the tail with changes in direction and speed."
  },
  {
    id: "05",
    frame: "F05",
    title: "Character Jump",
    due: "Oct 6",
    score: "9/10",
    video: "videos/Siegwald_Grace_Jump.mp4",
    poster: "",
    description:
      "A full character jump cycle: anticipation, launch, airborne pose, and landing, focused on believable weight and clear silhouettes at each key pose."
  },
  {
    id: "06",
    frame: "F06",
    title: "Bipedal Character Walking Across Multiple Platforms",
    due: "Oct 13",
    score: "9/10",
    video: "videos/Siegwald_Grace_CharacterPlatforms.mp4",
    poster: "",
    description:
      "A bipedal character traverses a series of platforms at different heights, adapting its walk into steps, small hops, and balance adjustments along the way."
  },
  {
    id: "07",
    frame: "F07",
    title: "Basic Walk Cycle",
    due: "Oct 27",
    score: "9/10",
    video: "videos/Siegwald_Grace_Walk.mp4",
    poster: "",
    description:
      "A clean, looping walk cycle built from the ground up, covering contact, down, passing, and up poses as the foundation for later character work."
  },
  {
    id: "08",
    frame: "F08",
    title: "Character-based Walk Cycle",
    due: "Nov 3",
    score: "9.5/10",
    video: "videos/Siegwald_Grace_CharacterWalk.mp4",
    poster: "",
    description:
      "The basic walk cycle rebuilt on a designed character, layering in personality, posture, and arm swing that reflect who the character is."
  },
  {
    id: "09",
    frame: "F09",
    title: "Character-based Run Cycle",
    due: "Nov 10",
    score: "9.5/10",
    video: "videos/Siegwald_Grace_Character_run.mp4",
    poster: "",
    description:
      "A run cycle for the same character, with a shorter contact phase, exaggerated poses, and a moment of full suspension to sell speed."
  },
  {
    id: "10",
    frame: "F10",
    title: "Quadruped Walk",
    due: "Nov 17",
    score: "9/10",
    video: "videos/Siegwald_Grace_QuadWalk.mp4",
    poster: "",
    description:
      "A four-legged walk cycle, working out the diagonal leg pairing and weight transfer that make quadruped locomotion read differently from a biped's."
  },
  {
    id: "11",
    frame: "F11",
    title: "Quadruped Run",
    due: "Nov 24",
    score: "9/10",
    video: "videos/Siegwald_Grace_QuadRun.mp4",
    poster: "",
    description:
      "The quadruped walk pushed into a full run, with a suspension phase and a rotating spine to capture the gather-and-release rhythm of a gallop."
  },
  {
    id: "12",
    frame: "F12",
    title: "Final Project Pitch",
    due: "Dec 1",
    score: "10/10",
    video: "videos/RunCycle.mov",
    poster: "",
    description:
      "The pitch for the final project: concept, planned shots, and the animation principles it was designed to showcase before full production began."
  },
  {
    id: "13",
    frame: "F13",
    title: "FINAL Animation Pass",
    due: "Dec 9",
    score: "10/10",
    video: "videos/Siegwald_Grace_Final.mp4",
    poster: "",
    description:
      "The completed final piece, bringing together timing, weight, and character work from across the semester into a single polished animation."
  }
];
