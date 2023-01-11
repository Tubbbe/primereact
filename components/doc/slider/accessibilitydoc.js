import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Slider element component uses <i>slider</i> role on the handle in addition to the <i>aria-orientation</i>, <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes. Value to describe the component can be
                        defined using
                        <i>aria-labelledby</i> and <i>aria-label</i> props.
                    </p>
                    <CodeHighlight>
                        {`
<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />
`}
                    </CodeHighlight>
                    <h4>Keyboard Support</h4>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i>tab</i>
                                    </td>
                                    <td>Moves focus to the slider.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="inline-flex flex-column">
                                            <i className="mb-1">left arrow</i>
                                            <i>up arrow</i>
                                        </span>
                                    </td>
                                    <td>Decrements the value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="inline-flex flex-column">
                                            <i className="mb-1">right arrow</i>
                                            <i>down arrow</i>
                                        </span>
                                    </td>
                                    <td>Increments the value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Set the minimum value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Set the maximum value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>page up</i>
                                    </td>
                                    <td>Increments the value by 10 steps.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>page down</i>
                                    </td>
                                    <td>Decrements the value by 10 steps.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}