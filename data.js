/* =============================================================
   PISS CANCER OFF — SITE DATA
   This is the ONLY file you need to touch for daily updates.
   Edit a number, save, commit, push. The site reads everything
   from here. (Or just tell Claude the new numbers in a session.)
   ============================================================= */

const SITE_DATA = {

  /* ---------- MONEY ---------- */
  raisedDollars: 0,        // total raised so far
  goalDollars: 10000,      // the goal (can grow if we gain traction)

  /* ---------- TRAINING TOTALS (cumulative since training began) ---------- */
  milesTrained: 0,         // total training miles logged
  stepsTrained: 0,         // total steps since training started — let it get huge

  /* ---------- HOUSEKEEPING ---------- */
  lastUpdated: "August 24, 2026",   // shown in the numbers section + footer

  /* ---------- THE RACE ---------- */
  race: {
    name: "Southern Tour Ultra",
    location: "Wilmington, NC",
    dateDisplay: "January 15",
    // Used for the live countdown. Adjust the time when the official
    // start time is announced (Eastern time offset already included).
    startISO: "2027-01-15T07:00:00-05:00",
  },

  /* ---------- LINKS ----------
     Leave any of these as "" and the site hides or soft-disables
     that button until the link exists. */
  links: {
    donate: "",       // main fundraiser page (501c3 platform) — not live yet
    family: "",       // optional direct-to-family GoFundMe/Venmo link
    strava: "",       // e.g. "https://www.strava.com/athletes/XXXX"
    instagram: "",    // e.g. "https://www.instagram.com/XXXX"
    email: "",        // the address you want public, e.g. "run@pisscanceroff.com"
  },

  /* ---------- THE GAME DAY TOUR ----------
     status: "next" = highlighted as the next run (use on exactly one row)
             "upcoming" = scheduled/planned
             "done" = completed (gets checked off)
     Edit dates as the CFB schedule firms up. */
  tour: [
    {
      school: "NC State",
      venue: "Carter-Finley Stadium lots",
      city: "Raleigh, NC",
      date: "TBD",
      colors: ["#CC0000", "#231F20"],
      status: "next",
    },
    {
      school: "UNC",
      venue: "Kenan Stadium tailgates",
      city: "Chapel Hill, NC",
      date: "TBD",
      colors: ["#7BAFD4", "#13294B"],
      status: "upcoming",
    },
    {
      school: "Duke",
      venue: "Wallace Wade Stadium lots",
      city: "Durham, NC",
      date: "TBD",
      colors: ["#012169", "#FFFFFF"],
      status: "upcoming",
    },
    {
      school: "Clemson",
      venue: "Memorial Stadium tailgates",
      city: "Clemson, SC",
      date: "TBD",
      colors: ["#F56600", "#522D80"],
      status: "upcoming",
    },
    {
      school: "Virginia",
      venue: "Scott Stadium lots",
      city: "Charlottesville, VA",
      date: "TBD",
      colors: ["#232D4B", "#E57200"],
      status: "upcoming",
    },
  ],
};
