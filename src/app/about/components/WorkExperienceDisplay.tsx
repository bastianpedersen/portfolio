import React from 'react';

function WorkExperienceDisplay() {
    const startDate: Date = new Date('2021-05-01');
    const currentDate: Date = new Date();
    const experienceInMilliseconds: number = currentDate.getTime() - startDate.getTime();
    const millisecondsInYear: number = 1000 * 60 * 60 * 24 * 365.25; // Considering leap years

    const experienceYears: string = (experienceInMilliseconds / millisecondsInYear).toFixed(1);

    return (
        <p>
            {experienceYears}+ years of professional development experience.
        </p>
    );
}

export default WorkExperienceDisplay;
