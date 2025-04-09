## test
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Rocket, GanttChartSquare, Users, Lightbulb, FileText, ShieldCheck, Link, Settings, ClipboardCheck, BarChart2, Repeat2, Radar, DollarSign, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Excelr8InfographicDeck() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Title Slide */}
      <motion.div {...fadeUp}>
        <Card className="text-center bg-gradient-to-b from-blue-900 to-indigo-800 text-white">
          <CardContent className="py-16">
            <h1 className="text-4xl font-bold mb-4">E.X.C.E.L.R.8 Sales Framework™</h1>
            <p className="text-xl">Transform Your Sales Process, Accelerate Your Results™</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Visual Metaphor */}
      <motion.div {...fadeUp}>
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Visual Metaphor</h2>
            <p>The Sales Accelerator is visualized as a rocket launching upward—each stage of the E.X.C.E.L. path represents a lift-off phase, while the R.8 multipliers are boosters that exponentially increase momentum and results.</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Core Stages */}
      <motion.div {...fadeUp}>
        <Card>
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-semibold">E.X.C.E.L. Core Stages</h2>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2"><Users className="text-blue-600" /> <strong>Engage:</strong> Build initial connection with buyers</li>
              <li className="flex items-center gap-2"><GanttChartSquare className="text-purple-600" /> <strong>Explore:</strong> Uncover pain points and needs</li>
              <li className="flex items-center gap-2"><Lightbulb className="text-green-600" /> <strong>Create Value:</strong> Deliver tailored insights & solutions</li>
              <li className="flex items-center gap-2"><ShieldCheck className="text-orange-600" /> <strong>Eliminate:</strong> Remove roadblocks and objections</li>
              <li className="flex items-center gap-2"><FileText className="text-red-600" /> <strong>Lock In:</strong> Secure the commitment & close</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Booster Stage */}
      <motion.div {...fadeUp}>
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">The R.8 Booster Stage</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-yellow-600"><Trophy /> <strong>Reinforce Success:</strong> Celebrate wins & establish momentum</div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2"><Users /> Referral Engine</div>
                <div className="flex items-center gap-2"><Link /> Strategic Partnerships</div>
                <div className="flex items-center gap-2"><Settings /> Sales Process Automation</div>
                <div className="flex items-center gap-2"><ClipboardCheck /> Coaching Cadence</div>
                <div className="flex items-center gap-2"><FileText /> Enablement Content</div>
                <div className="flex items-center gap-2"><Repeat2 /> Success Integration</div>
                <div className="flex items-center gap-2"><Radar /> CRM Intelligence</div>
                <div className="flex items-center gap-2"><DollarSign /> Incentives</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Use Cases */}
      <motion.div {...fadeUp}>
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Practical Use Cases</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Train new reps with visual storytelling of the sales process</li>
              <li>Include in sales pitch decks to convey methodical approach</li>
              <li>Use during onboarding, QBRs, and revenue strategy sessions</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div {...fadeUp}>
        <Card className="bg-slate-100">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Accelerate?</h2>
            <p className="mb-6">Put the E.X.C.E.L.R.8 Framework into action across your team and watch pipeline velocity and close rates soar.</p>
            <Button className="bg-blue-700 text-white hover:bg-blue-800">Get the Full Toolkit</Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Printable One-Pager */}
      <motion.div {...fadeUp}>
        <Card className="border border-dashed">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">One-Pager Snapshot</h2>
            <p className="mb-3">Quick-reference visual of the E.X.C.E.L.R.8 stages, booster multipliers, and ideal use cases. Use for internal training, onboarding kits, and client leave-behinds.</p>
            <Button variant="outline" className="inline-flex items-center gap-1">Download PDF <ChevronRight className="h-4 w-4" /></Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
