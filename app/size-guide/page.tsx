import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ruler, Info } from "lucide-react"

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center py-12 sm:py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Ruler className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Size Guide</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Find your perfect fit. All measurements are in inches. When in doubt, size up for a more relaxed look.
            </p>
          </div>

          {/* Size Tables */}
          <Tabs defaultValue="tees" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-8">
              <TabsTrigger
                value="tees"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                T-Shirts
              </TabsTrigger>
              <TabsTrigger
                value="oversized"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Oversized
              </TabsTrigger>
              <TabsTrigger
                value="hoodies"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Hoodies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tees">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">Standard T-Shirts</h3>
                  <p className="text-sm text-muted-foreground mt-1">True to size fit</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-background">
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Size</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Chest</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Length</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Shoulder</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">XS</td>
                        <td className="py-4 px-6">34-36</td>
                        <td className="py-4 px-6">26</td>
                        <td className="py-4 px-6">16</td>
                        <td className="py-4 px-6">7.5</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">S</td>
                        <td className="py-4 px-6">36-38</td>
                        <td className="py-4 px-6">27</td>
                        <td className="py-4 px-6">17</td>
                        <td className="py-4 px-6">8</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">M</td>
                        <td className="py-4 px-6">38-40</td>
                        <td className="py-4 px-6">28</td>
                        <td className="py-4 px-6">18</td>
                        <td className="py-4 px-6">8.5</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">L</td>
                        <td className="py-4 px-6">40-42</td>
                        <td className="py-4 px-6">29</td>
                        <td className="py-4 px-6">19</td>
                        <td className="py-4 px-6">9</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">XL</td>
                        <td className="py-4 px-6">42-44</td>
                        <td className="py-4 px-6">30</td>
                        <td className="py-4 px-6">20</td>
                        <td className="py-4 px-6">9.5</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">XXL</td>
                        <td className="py-4 px-6">44-46</td>
                        <td className="py-4 px-6">31</td>
                        <td className="py-4 px-6">21</td>
                        <td className="py-4 px-6">10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="oversized">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">Oversized T-Shirts</h3>
                  <p className="text-sm text-muted-foreground mt-1">Relaxed, dropped shoulder fit</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-background">
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Size</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Chest</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Length</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Shoulder</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">S</td>
                        <td className="py-4 px-6">44</td>
                        <td className="py-4 px-6">28</td>
                        <td className="py-4 px-6">22</td>
                        <td className="py-4 px-6">9</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">M</td>
                        <td className="py-4 px-6">46</td>
                        <td className="py-4 px-6">29</td>
                        <td className="py-4 px-6">23</td>
                        <td className="py-4 px-6">9.5</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">L</td>
                        <td className="py-4 px-6">48</td>
                        <td className="py-4 px-6">30</td>
                        <td className="py-4 px-6">24</td>
                        <td className="py-4 px-6">10</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">XL</td>
                        <td className="py-4 px-6">50</td>
                        <td className="py-4 px-6">31</td>
                        <td className="py-4 px-6">25</td>
                        <td className="py-4 px-6">10.5</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">XXL</td>
                        <td className="py-4 px-6">52</td>
                        <td className="py-4 px-6">32</td>
                        <td className="py-4 px-6">26</td>
                        <td className="py-4 px-6">11</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hoodies">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">Hoodies</h3>
                  <p className="text-sm text-muted-foreground mt-1">Comfortable, slightly oversized fit</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-background">
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Size</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Chest</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Length</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Shoulder</th>
                        <th className="text-left py-4 px-6 text-foreground font-semibold">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">S</td>
                        <td className="py-4 px-6">42</td>
                        <td className="py-4 px-6">26</td>
                        <td className="py-4 px-6">19</td>
                        <td className="py-4 px-6">24</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">M</td>
                        <td className="py-4 px-6">44</td>
                        <td className="py-4 px-6">27</td>
                        <td className="py-4 px-6">20</td>
                        <td className="py-4 px-6">25</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">L</td>
                        <td className="py-4 px-6">46</td>
                        <td className="py-4 px-6">28</td>
                        <td className="py-4 px-6">21</td>
                        <td className="py-4 px-6">26</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="py-4 px-6 font-medium text-foreground">XL</td>
                        <td className="py-4 px-6">48</td>
                        <td className="py-4 px-6">29</td>
                        <td className="py-4 px-6">22</td>
                        <td className="py-4 px-6">27</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* How to Measure */}
          <div className="mt-12 bg-card rounded-xl border border-border p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              How to Measure
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Chest</h4>
                <p className="text-sm text-muted-foreground">
                  Measure around the fullest part of your chest, keeping the tape horizontal.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Length</h4>
                <p className="text-sm text-muted-foreground">
                  Measure from the highest point of the shoulder down to the bottom hem.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Shoulder</h4>
                <p className="text-sm text-muted-foreground">
                  Measure from shoulder seam to shoulder seam across the back.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Sleeve</h4>
                <p className="text-sm text-muted-foreground">
                  Measure from the shoulder seam to the end of the sleeve.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <h4 className="font-semibold text-foreground mb-2">Pro Tips</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• If you are between sizes, size up for a more relaxed fit</li>
              <li>• Our oversized collection is designed to be worn loose—order your usual size</li>
              <li>• Hoodies may shrink slightly after first wash—consider sizing up if you prefer a looser fit</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
