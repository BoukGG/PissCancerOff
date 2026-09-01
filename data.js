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
};
