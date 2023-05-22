import { extractPlantData } from "./extractPlantData";

describe("extractPlantData", () => {
  it("should extract plant data from the html", () => {
    expect(extractPlantData(quickInfoDiv)).toEqual(
      expect.objectContaining({
        Wuchs: expect.objectContaining({ Wuchsbreite: "25 - 30 cm" }),
      })
    );
  });
});

const quickInfoDiv = `
<div id="pbody-quickinfo">

	<div class="pbody-quickblock">
			<div class="pbody-section-wrapper pbody-section-wrapper-1st">
				<h3 class="pbody-section-title">Wuchs</h3>
			</div>
			<table class="pbody-quicktable">
				<tbody><tr>
						<td class="pbody-quickkey">
							Wuchs<span data-id="5" class="core-quicktooltip tooltipstered"></span></td>
						<td class="pbody-quickvalue">
							flächig, teppichartig, kriechend, stark</td>
					</tr>
				<tr>
						<td class="pbody-quickkey">
							Wuchsbreite</td>
						<td class="pbody-quickvalue">
							25 - 30 cm</td>
					</tr>
				<tr>
						<td class="pbody-quickkey">
							Wuchshöhe</td>
						<td class="pbody-quickvalue">
							<span itemprop="height">30 - 40 cm</span>
			</td>
					</tr>
				</tbody></table>
		</div>
		<div class="pbody-quickblock">
			<div class="pbody-section-wrapper ">
				<h3 class="pbody-section-title">Blüte</h3>
			 </div>
			<table class="pbody-quicktable">
				<tbody><tr>
							<td data-id="54" class="pbody-quickkey">
								Blüte<span data-id="54" class="core-quicktooltip tooltipstered"></span></td>
							<td class="pbody-quickvalue">einfach</td>
						</tr>
					<tr>
							<td data-id="22" class="pbody-quickkey">
								Blütenfarbe</td>
							<td class="pbody-quickvalue">violettrosa</td>
						</tr>
					<tr>
							<td data-id="51" class="pbody-quickkey">
								Blütenform</td>
							<td class="pbody-quickvalue">rispenförmig</td>
						</tr>
					<tr>
							<td data-id="52" class="pbody-quickkey">
								Blütengröße</td>
							<td class="pbody-quickvalue">mittel (5-10cm)</td>
						</tr>
					<tr>
							<td data-id="44" class="pbody-quickkey">
								Blütezeit</td>
							<td class="pbody-quickvalue">Juli - August</td>
						</tr>
					<tr>
							<td data-id="18" class="pbody-quickkey">
								Duftstärke</td>
							<td class="pbody-quickvalue"><span class="pbody-quickgraph-off"></span>
        <span class="pbody-quickgraph-off"></span>
        <span class="pbody-quickgraph-off"></span>
        <span class="pbody-quickgraph-off"></span>
        <span class="pbody-quickgraph-off"></span>
        </td>
						</tr>
					</tbody></table>
			<meta itemprop="color" content="rosa">
			</div>
		<div class="pbody-quickblock">
			<div class="pbody-section-wrapper ">
				<h3 class="pbody-section-title">Frucht</h3>
			</div>
			<table class="pbody-quicktable">
				<tbody><tr>
						<td class="pbody-quickkey">
							Frucht</td>
						<td class="pbody-quickvalue">Nüsschen</td>
					</tr>
				<tr>
						<td class="pbody-quickkey">
							Fruchtschmuck</td>
						<td class="pbody-quickvalue">nein</td>
					</tr>
				</tbody></table>
		</div>
		<div class="pbody-quickblock">
			<div class="pbody-section-wrapper ">
				<h3 class="pbody-section-title">Blatt</h3>
			</div>
			<table class="pbody-quicktable">
				<tbody><tr>
						<td data-id="10" class="pbody-quickkey">
							Blatt</td>
						<td class="pbody-quickvalue">breit-lanzettlich, zugespitzt, ganzrandig, filzig, wollig behaart</td>
					</tr>
				<tr>
						<td data-id="50" class="pbody-quickkey">
							Blattschmuck</td>
						<td class="pbody-quickvalue"><span class="pbody-quickchar"></span>
			</td>
					</tr>
				<tr>
						<td data-id="3" class="pbody-quickkey">
							Laub<span data-id="3" class="core-quicktooltip tooltipstered"></span></td>
						<td class="pbody-quickvalue">wintergrün</td>
					</tr>
				<tr>
						<td data-id="19" class="pbody-quickkey">
							Laubfarbe</td>
						<td class="pbody-quickvalue">grauweiß, silbrig</td>
					</tr>
				</tbody></table>
		</div>
		<div class="pbody-quickblock">
			<div class="pbody-section-wrapper ">
				<h3 class="pbody-section-title">Sonstige</h3>
			</div>
			<table class="pbody-quicktable">
				<tbody><tr>
								<td data-id="11" class="pbody-quickkey">
									Besonderheiten</td>
								<td class="pbody-quickvalue">
									beliebte Einfassungspflanze</td>
							</tr>
						<tr>
								<td data-id="6" class="pbody-quickkey">
									Boden</td>
								<td class="pbody-quickvalue">
									leicht trocken bis frisch, durchlässig, nährstoffarm</td>
							</tr>
						<tr>
								<td data-id="158" class="pbody-quickkey">
									Bodendeckend</td>
								<td class="pbody-quickvalue">
									<span class="pbody-quickchar"></span>
			</td>
							</tr>
						<tr>
								<td data-id="17" class="pbody-quickkey">
									Jahrgang</td>
								<td class="pbody-quickvalue">
									1849</td>
							</tr>
						<tr>
								<td data-id="166" class="pbody-quickkey">
									Nahrung für Insekten</td>
								<td class="pbody-quickvalue">
									<span class="pbody-quickchar"></span>
			</td>
							</tr>
						<tr>
								<td data-id="9" class="pbody-quickkey">
									Pflanzenbedarf</td>
								<td class="pbody-quickvalue">
									25 bis 30 cm Pflanzabstand, 10 bis 12 Stück pro m²</td>
							</tr>
						<tr>
								<td data-id="41" class="pbody-quickkey">
									Standort</td>
								<td class="pbody-quickvalue">
									Sonne</td>
							</tr>
						<tr>
								<td data-id="8" class="pbody-quickkey">
									Verwendung</td>
								<td class="pbody-quickvalue">
									Freiflächen, Felssteppen, Steinanlagen, Rabatten, Schnittpflanze, Bienenweide</td>
							</tr>
						<tr>
						<td class="pbody-quickkey">Themenwelt</td>
						<td class="pbody-quickvalue">
							<a href="https://www.baumschule-horstmann.de/hitzevertraegliche-pflanzen-148t">Hitzeverträgliche Pflanzen</a><br>
							</td>
					</tr>
				</tbody></table>
		</div>
		</div>`;
