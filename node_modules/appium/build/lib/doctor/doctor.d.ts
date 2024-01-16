export class Doctor {
    /**
     * @param {DoctorCheck[]} [checks=[]]
     */
    constructor(checks?: import("@appium/types").IDoctorCheck[] | undefined);
    log: import("@appium/types").AppiumLogger;
    /** @type {DoctorCheck[]} */
    checks: DoctorCheck[];
    /** @type {DoctorIssue[]} */
    foundIssues: DoctorIssue[];
    /**
     * @returns {DoctorIssue[]}
     */
    get issuesRequiredToFix(): DoctorIssue[];
    /**
     * @returns {DoctorIssue[]}
     */
    get issuesOptionalToFix(): DoctorIssue[];
    /**
     * The doctor shows the report
     */
    diagnose(): Promise<void>;
    /**
     * @returns {Promise<boolean>}
     */
    reportManualIssues(): Promise<boolean>;
    /**
     * @param {DoctorIssue} f
     */
    runAutoFix(f: DoctorIssue): Promise<void>;
    runAutoFixes(): Promise<void>;
    run(): Promise<void>;
    /**
     * @param {DoctorCheckResult} result
     * @param {DoctorCheck} check
     * @returns {DoctorIssue?}
     */
    toIssue(result: DoctorCheckResult, check: DoctorCheck): DoctorIssue | null;
    /**
     * @returns {string}
     */
    buildFixMessage(): string;
    /**
     * @returns {boolean}
     */
    reportSuccess(): boolean;
}
export type DoctorIssue = {
    check: DoctorCheck;
    error: string;
    fixed?: boolean | undefined;
};
export type DoctorCheck = import('@appium/types').IDoctorCheck;
export type DoctorCheckResult = import('@appium/types').DoctorCheckResult;
//# sourceMappingURL=doctor.d.ts.map